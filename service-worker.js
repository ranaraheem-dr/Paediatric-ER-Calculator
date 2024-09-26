const CACHE_NAME = 'peds-er-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/medications.js',
    '/main.js',
    // Add any additional assets you want to cache for offline use
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request); // Return cached response or fetch if not found
        })
    );
});
