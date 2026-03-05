const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
    '/index.html',
    '/styles.css',
    '/main.js',
    '/script.js',
    '/assets/img/favicon.png',
    '/assets/img/favicon1.png',
    '/assets/img/favicon2.png',
    '/assets/img/favicon3.png',
    '/assets/img/favicon4.png',
    '/assets/img/favicon5.png',
    '/assets/img/favicon6.png',
    '/assets/img/favicon7.png',
    '/assets/img/favicon8.png',
    '/assets/img/favicon9.png',
    '/assets/img/profile.jpg',
    '/assets/img/project1.jpg',
    '/assets/img/project2.jpg',
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)   
      .then(cache => {
        return cache.addAll(urlsToCache)
            .then(() => { 
                self.skipWaiting()
             })
      })
      .catch(err => console.log('Error al cachear los archivos', err))
  );
});

self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME];
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(e.request);
        })
    );
  })

    .then(() => {
      self.clients.claim();
    })