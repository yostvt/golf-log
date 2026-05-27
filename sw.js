const CACHE_VERSION = 'v20260527222526';
const CACHE_NAME = 'scorexolution-' + CACHE_VERSION;
const ASSETS = ['/', '/index.html', '/app.js', '/venues.js', '/manifest.json', '/icon-192.png', '/icon-512.png'];
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
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
