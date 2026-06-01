// ※ CACHE_VERSION はデプロイ毎にビルドが自動更新（タイムスタンプ）。OCR導入に伴い一度バンプ。
const CACHE_VERSION = 'v20260601122903';
const CACHE_NAME = 'scorexolution-' + CACHE_VERSION;
const ASSETS = ['/', '/index.html', '/app.js', '/venues.js', '/rexy.js', '/manifest.json', '/icon-192.png', '/icon-512.png', '/icon-512-maskable.png', '/apple-touch-icon.png', '/favicon-32.png'];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(ASSETS.map((a) =>
        // {cache:'reload'} でブラウザのHTTPキャッシュを必ずバイパスし、サーバー最新版を取得して保存する
        fetch(new Request(a, { cache: 'reload' }))
          .then((res) => { if (res && res.ok) return cache.put(a, res); })
          .catch(() => {})
      ))
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

// 自オリジンはキャッシュ優先＋ネット fallback。Tesseract.js のCDN資産(別オリジン)は
// ここを素通り＝ネットワーク取得（OCRは「初回オンライン必須」で割り切る方針／第1弾）。
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});

// ─────────────────────────────────────────────────────────────────────────────
// 【任意・次フェーズ】OCR資産（Tesseract.js worker/wasm/言語データ）をオフライン対応に
// したい場合は、別キャッシュに stale-while-revalidate で保存する。CORS(opaque)に注意。
// 第1弾では未適用（オンライン必須）。必要になったら以下を fetch ハンドラに統合する想定:
//
//   const OCR_CDN = /cdn\.jsdelivr\.net|unpkg\.com|tessdata|tesseract/;
//   if (OCR_CDN.test(event.request.url)) {
//     event.respondWith(
//       caches.open('scorexo-ocr').then(async (c) => {
//         const hit = await c.match(event.request);
//         const net = fetch(event.request).then((r) => { if (r && (r.ok || r.type === 'opaque')) c.put(event.request, r.clone()); return r; }).catch(() => hit);
//         return hit || net;
//       })
//     );
//     return;
//   }
// ─────────────────────────────────────────────────────────────────────────────
