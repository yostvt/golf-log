// functions/api/vision.js
// Cloudflare Pages Function — Google Cloud Vision 中継（APIキーをサーバー側に秘匿）
//
//  ・エンドポイント: /api/vision (POST) … 同一オリジンで配信される全ドメイン共通。
//      本番 https://yosgolf.blog/api/vision ／ Pages既定 https://golf-log.pages.dev/api/vision
//  ・キーは Cloudflare Pages の「Settings > Environment variables」で
//      GOOGLE_VISION_API_KEY として設定する（リポジトリには絶対に置かない）。
//  ・クライアント(app.js)は { "image": "<base64>" } だけを送る。キーは持たない。
//  ・このファイルはリポジトリ直下の functions/api/ に置く（app_scorexo/ の中ではない）。
//      → Pages のファイルベースルーティングで自動的に /api/vision になる。

// 許可ホスト：本番(yosgolf.blog)＋Pages既定ドメイン(golf-log.pages.dev)＋
// そのプレビュー配信(<hash>.golf-log.pages.dev)。いずれも https のみ。
function hostAllowed(urlStr) {
  try {
    const u = new URL(urlStr);
    if (u.protocol !== "https:") return false;
    const h = u.hostname;
    return (
      h === "yosgolf.blog" ||
      h === "golf-log.pages.dev" ||
      h.endsWith(".golf-log.pages.dev")
    );
  } catch (e) {
    return false;
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // --- 不正利用対策（軽量）：Origin / Referer が許可ホストのときだけ通す ---
  // ※ ヘッダは詐称可能なので「軽量な抑止」。本命は GCP 側の予算上限＋Vision限定。
  const origin = request.headers.get("Origin") || "";
  const referer = request.headers.get("Referer") || "";
  const originOk =
    (origin && hostAllowed(origin)) ||
    (!origin && referer && hostAllowed(referer));
  if (!originOk) {
    return json({ error: "forbidden_origin" }, 403);
  }

  // --- サーバー側のキー確認 ---
  const key = env.GOOGLE_VISION_API_KEY;
  if (!key) {
    return json({ error: "server_key_unset" }, 500);
  }

  // --- 入力：クライアントは { image: base64(dataURLのdata部分のみ) } を送る ---
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "bad_request" }, 400);
  }
  const image = body && body.image;
  if (!image || typeof image !== "string") {
    return json({ error: "no_image" }, 400);
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
      502
    );
  }
  clearTimeout(timer);

  // --- Vision の応答(JSON)をそのまま透過で返す ---
  //     クライアント側の解析ロジック（json.responses[0]...）は現状のまま動く。
  const text = await resp.text();
  return new Response(text, {
    status: resp.status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

// POST 以外は 405（POST は上の onRequestPost が優先的に処理される）
export async function onRequest() {
  return json({ error: "method_not_allowed" }, 405);
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
