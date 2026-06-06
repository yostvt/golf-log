// ─────────────────────────────────────────────────────────────────────────────
// ScoRExolution (スコレボ) Service Worker
//   CACHE_VERSION はデプロイ毎に更新する（APP_VERSION と揃える）。
//   バージョン付きキャッシュ方式: バージョンを変えると旧キャッシュを破棄し、
//   初回アクセス時にネットから取得し直すため、app.js 等の更新が自動反映される。
//   ナビゲーション(HTML)はネットワーク優先で常に最新を取得（オフライン時はキャッシュ）。
//   同一オリジンの静的アセットはキャッシュ優先＋取得時キャッシュ。
//   他オリジン(CDNのReact/ReactDOM等)は介入しない。
// ─────────────────────────────────────────────────────────────────────────────
const CACHE_VERSION = "06070747";
const CACHE_NAME = "scorexo-" + CACHE_VERSION;

// 事前キャッシュするコアファイル（相対パス＝SW配置ディレクトリ基準）。
// 個別 add + allSettled なので、存在しないファイルがあっても install は失敗しない。
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./venues.js",
  "./rexy.js",
  "./score-share.js",
  "./manifest.json",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(CORE_ASSETS.map((url) => cache.add(url)))
    )
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((k) => k.startsWith("scorexo-") && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  // ページ側から { type: "SKIP_WAITING" } を送れば即時更新できる
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  let url;
  try { url = new URL(req.url); } catch (e) { return; }

  // 他オリジン（CDNのReact/ReactDOM/Vision APIリレー等）はSWで介入しない
  if (url.origin !== self.location.origin) return;

  // ナビゲーション(HTML)はネットワーク優先 → 失敗時キャッシュ → 最終的に index.html
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
    );
    return;
  }

  // それ以外の同一オリジンGET: キャッシュ優先 → なければネット取得しキャッシュ
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => cached);
    })
  );
});
