// ScoRExolution Service Worker
// 方式: network-first（常に最新を取得。圏外時のみキャッシュにフォールバック）
//  ※ localStorage(スコアデータ)はこのキャッシュとは別領域。SW更新では一切消えません。
const CACHE_VERSION = 'v20260530-nf1';
const CACHE_NAME = 'scorexolution-' + CACHE_VERSION;
const ASSETS = ['/', '/index.html', '/app.js', '/venues.js', '/manifest.json', '/icon-192.png', '/icon-512.png'];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
      // 旧キャッシュで固まっていた画面を、新SW有効化時に自動リロードして救済
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => clients.forEach((c) => { if (c.navigate) c.navigate(c.url); }))
      .catch(() => {})
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return; // GET以外はSWが介入しない
  event.respondWith(
    fetch(req)
      .then((res) => {
        // 同一オリジンの正常レスポンスのみキャッシュ更新（CDN等のopaqueは対象外）
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req)) // ネット不可 → キャッシュ
  );
});
