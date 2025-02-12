self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalado');
    event.waitUntil(
        caches.open('Icecream-Store-PWA')
            .then((cache) => {
                return cache.addAll([
                    '/',
                    '/index.html',
                    '/about.html',
                    '/contact.html',
                    '/gallery.html',
                    '/product.html',
                    '/service.html',
                    '/manifest.json',
                    '/css/style.min.css',
                    '/images/icons/192x192.png',
                    '/images/icons/512x512.png',
                    '/img/about.jpg',
                    '/img/carousel-1.jpg',
                    '/img/carousel-2.jpg',
                    '/img/header.jpg',
                    '/img/portfolio-1.jpg',
                    '/img/portfolio-2.jpg',
                    '/img/portfolio-3.jpg',
                    '/img/portfolio-4.jpg',
                    '/img/portfolio-5.jpg',
                    '/img/portfolio-6.jpg',
                    '/img/product-1.jpg',
                    '/img/product-2.jpg',
                    '/img/product-3.jpg',
                    '/img/product-4.jpg',
                    '/img/product-5.jpg',
                    '/img/promotion.jpg',
                    '/img/service-1.jpg',
                    '/img/service-2.jpg',
                    '/img/service-3.jpg',
                    '/img/service-4.jpg',
                    '/img/team-1.jpg',
                    '/img/team-2.jpg',
                    '/img/team-3.jpg',
                    '/img/team-4.jpg',
                    '/img/testimonial-1.jpg',
                    '/img/testimonial-2.jpg',
                    '/img/testimonial-3.jpg',
                    '/js/main.js',
                    '/css/style.css',
                    '/images/pc.PNG',
                    '/images/cel.PNG'
                ]);
            })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = ['Icecream-Store-PWA'];
    console.log('Service Worker: Activado');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch
self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetch solicitado para', event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
            .catch((error) => console.error('Error en la solicitud fetch', error))
    );
});
