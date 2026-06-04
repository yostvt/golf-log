// functions/api/vision.js
// Cloudflare Pages Function — Google Cloud Vision 中継（APIキーをサーバー側に秘匿）
//
//  ・エンドポイント: /api/vision (POST)
//      Pages既定 https://golf-log.pages.dev/api/vision で稼働。
//      本番(レンタルサーバ https://yosgolf.blog/app_scorexo/)には Functions が無いため、
//      本番クライアントは上記 Cloudflare URL を「クロスオリジン」で呼ぶ → 本Functionが CORS を返して許可。
//  ・キーは Cloudflare Pages の「Settings > Environment variables」で
//      GOOGLE_VISION_API_KEY として設定する（リポジトリには絶対に置かない）。
//  ・クライアント(app.js)は { "image": "<base64>" } だけを送る。応答は Vision の生JSONを透過。
//  ・このファイルはリポジトリ直下の functions/api/ に置く（app_scorexo/ の中ではない）。

// 許可ホスト：本番(yosgolf.blog / www)＋Pages既定(golf-log.pages.dev)＋そのプレビュー。https のみ。
function hostAllowed(urlStr) {
  try {
    const u = new URL(urlStr);
    if (u.protocol !== "https:") return false;
    const h = u.hostname;
    return (
      h === "yosgolf.blog" ||
      h === "www.yosgolf.blog" ||
      h === "golf-log.pages.dev" ||
      h.endsWith(".golf-log.pages.dev")
    );
  } catch (e) {
    return false;
  }
}

// 本番(yosgolf.blog)→Cloudflare(golf-log.pages.dev) はクロスオリジン。許可OriginにのみCORSを返す。
function corsHeaders(request) {
  const origin = request.headers.get("Origin") || "";
  const h = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
  if (origin && hostAllowed(origin)) h["Access-Control-Allow-Origin"] = origin;
  return h;
}

function json(obj, status, extra) {
  const h = { "Content-Type": "application/json; charset=utf-8" };
  if (extra) for (const k in extra) h[k] = extra[k];
  return new Response(JSON.stringify(obj), { status: status || 200, headers: h });
}

// CORS プリフライト（本番クロスオリジンPOSTの前に飛ぶ OPTIONS）
export async function onRequestOptions(context) {
  return new Response(null, { status: 204, headers: corsHeaders(context.request) });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const cors = corsHeaders(request);

  // --- 不正利用対策（軽量）：Origin / Referer が許可ホストのときだけ通す ---
  // ※ ヘッダは詐称可能なので「軽量な抑止」。本命は GCP 側の予算上限＋Vision限定キー。
  const origin = request.headers.get("Origin") || "";
  const referer = request.headers.get("Referer") || "";
  const originOk =
    (origin && hostAllowed(origin)) ||
    (!origin && referer && hostAllowed(referer));
  if (!originOk) {
    return json({ error: "forbidden_origin" }, 403, cors);
  }

  // --- サーバー側のキー確認 ---
  const key = env.GOOGLE_VISION_API_KEY;
  if (!key) {
    return json({ error: "server_key_unset" }, 500, cors);
  }

  // --- 入力：クライアントは { image: base64 } を送る（dataURLでも可） ---
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "bad_request" }, 400, cors);
  }
  let image = body && body.image;
  if (!image || typeof image !== "string") {
    return json({ error: "no_image" }, 400, cors);
  }
  const comma = image.indexOf(",");
  if (image.lastIndexOf("data:", 0) === 0 && comma >= 0) {
    image = image.slice(comma + 1);
  }

  // --- Vision リクエストはサーバー側で組み立て（機能を DOCUMENT_TEXT_DETECTION に限定） ---
  const visionBody = {
    requests: [
      {
        image: { content: image },
        features: [{ type: "DOCUMENT_TEXT_DETECTION" }],
        imageContext: { languageHints: ["ja", "en"] },
      },
    ],
  };

  // --- タイムアウト付きで Google Vision を呼ぶ ---
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  let resp;
  try {
    resp = await fetch(
      "https://vision.googleapis.com/v1/images:annotate?key=" + key,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(visionBody),
        signal: controller.signal,
      }
    );
  } catch (e) {
    clearTimeout(timer);
    return json(
      { error: "vision_unreachable", detail: String((e && e.message) || e) },
      502,
      cors
    );
  }
  clearTimeout(timer);

  // --- Vision の応答(JSON)をそのまま透過で返す（CORSヘッダ付き） ---
  //     クライアント側の解析ロジック（json.responses[0]...）は現状のまま動く。
  const text = await resp.text();
  const h = { "Content-Type": "application/json; charset=utf-8" };
  for (const k in cors) h[k] = cors[k];
  return new Response(text, { status: resp.status, headers: h });
}

// POST/OPTIONS 以外は 405
export async function onRequest() {
  return json({ error: "method_not_allowed" }, 405);
}
