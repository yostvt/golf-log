const CACHE_VERSION = 'v20260530200000';
const CACHE_NAME = 'scorexolution-' + CACHE_VERSION;
const ASSETS = ['/', '/index.html', '/app.js', '/venues.js', '/rexy.js', '/manifest.json', '/icon-192.png', '/icon-512.png', '/icon-512-maskable.png', '/apple-touch-icon.png', '/favicon-32.png'];
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => Promise.all(ASSETS.map(a => cache.add(a).catch(()=>{})))));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
