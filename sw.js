// ⚠️ このバージョン番号はビルド時に自動更新されます
const CACHE_VERSION = 'v20260526061641';
const CACHE_NAME = 'scorexolution-' + CACHE_VERSION;

const ASSETS = [
  '/',
  '/index.html',
  '/app.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
];

// インストール：新キャッシュを作成
self.addEventListener('install', (event) => {
  self.skipWaiting(); // 即座に有効化
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// アクティベート：古いキャッシュを削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim()) // 開いているタブも即座に更新
  );
});

// フェッチ：キャッシュ優先、なければネットワーク
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
