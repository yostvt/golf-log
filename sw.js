// ※ CACHE_VERSION はデプロイ毎に更新（タイムスタンプ）。サブディレクトリ配信対応で相対パス化。
const CACHE_VERSION = 'v20260627130324';
const CACHE_NAME = 'scorexolution-' + CACHE_VERSION;
// 相対パス（先頭スラッシュ無し）。sw.js の置き場所を基準に解決されるため、
//   ルート配信(pages.dev)        → /app.js 等
//   サブディレクトリ配信(本番)   → /app_scorexo/app.js 等
// の両方で正しく動く。
const ASSETS = ['./', './index.html', './app.js', './splash.png', './venues.js', './rexy.js', './score-share.js', './manifest.json', './icon-192.png', './icon-512.png', './icon-512-maskable.png', './apple-touch-icon.png', './favicon-32.png'];

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

// 自オリジンはキャッシュ優先＋ネット fallback。別オリジン(CDN/中継)は素通り。
self.addEventListener('fetch', (event) => {
  // 中継API等はキャッシュしない（常にネットワーク）
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
