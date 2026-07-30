const CACHE_NAME = 'portfolio-offline-v1785455437403';
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('fetch', event => { event.respondWith(caches.match(event.request).then(response => response || fetch(event.request))); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(cacheNames => Promise.all(cacheNames.map(cacheName => { if (cacheName !== CACHE_NAME) return caches.delete(cacheName); }))).then(() => self.clients.claim())); });