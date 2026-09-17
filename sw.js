// Minimal service worker - just enough to satisfy PWA installability.
// It doesn't cache anything, so the app always loads fresh data.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', (e) => {
  // Pass every request straight through to the network.
  e.respondWith(fetch(e.request));
});
