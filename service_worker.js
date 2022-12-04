const cacheName = 'cacheAssets-v5.1.0'; // cache name must be unique

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
            return response || fetch(event.request); // Cache with network fallback
            })
    )
});

self.addEventListener('install', function(event) {
    self.skipWaiting();
    console.log(caches)
    caches.open(cacheName).then(function(cache){
        console.log('[Service Worker] Installing...');
        return cache.addAll([
            // root folder
            'https://christy-varghese.github.io/PWA-Lab05/',

            // main HTML file
            'https://christy-varghese.github.io/PWA-Lab05/index.html',

            // JS file
            'https://christy-varghese.github.io/PWA-Lab05/javascript/scripts.js',

            // Manifest file for PWA
            'https://christy-varghese.github.io/PWA-Lab05/manifest.json',

            // CSS file
            'https://christy-varghese.github.io/PWA-Lab05/css/main.css',

            // pages
            'https://christy-varghese.github.io/PWA-Lab05/pages/home.html',
            'https://christy-varghese.github.io/PWA-Lab05/pages/about.html',
            'https://christy-varghese.github.io/PWA-Lab05/pages/contact.html',
        ]);
    }).catch((err) => {
        console.log('something went wrong', err);
    })
});

self.addEventListener('activate', function(event) {
    // console.log('[Service worker] activated',event);
    event.waitUntil(clients.claim());

    // Removal of old cache
    event.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cache => cache !== cacheName)
                .map(cacheName => caches.delete(cacheName))
            )
        })
    )   
});

self.addEventListener("notificationclick", (event) => {
    const action = event.action;
    const notification = event.notification;
    const notificationData = notification.data;
    console.log("Data:", action);
    const options = {
      includeUncontrolled: true,
      type: "all",
    };
  
    switch (action) {
      case "agree":
        clients.matchAll(options).then((clients) => {
          clients.forEach((client) => {
            client.postMessage("So we both agree on that!");
          });
        });
        break;
  
      case "disagree":
        clients.matchAll(options).then((clients) => {
          clients.forEach((clients) => {
            clients.postMessage("Let's agree to disagree.");
          });
        });
        break;
  
      case "":
        console.log("Clicked on the notification.");
        const openPromise = clients.openWindow("/index.html");
        event.waitUntil(openPromise);
        break;
    }
  });
