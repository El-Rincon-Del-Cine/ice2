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
                    '/images/cel.PNG',
                    '/lib/counterup/counterup.min.js',
                    '/lib/easing/easing.min.js',
                    '/lib/easing/easing.js',
                    '/lib/isotoper/isotope.pkgd.js',
                    '/lib/isoTop/isotope.pkgd.min.js',
                    '/lib/lightbox/css/lightbox.min.css',
                    '/lib/lightbox/lightbox.css',
                    '/lib/lightbox/images/close.png',
                    '/lib/lightbox/images/loading.gif',
                    '/lib/lightbox/images/next.png',
                    '/lib/lightbox/images/prev.png',
                    '/lib/lightbox/js/lightbox.min.js',
                    '/lib/lightbox/js/lightbox.js',
                    '/lib/lightbox/links.php',
                    '/lib/owlcarousel/owl.carousel.min.js',
                    '/lib/owlcarousel/owl.carousel.js',
                    '/lib/owlcarousel/LICENSE',
                    '/lib/owlcarousel/assets/ajax-loader.gif',
                    '/lib/owlcarousel/assets/owl.carousel.min.css',
                    '/lib/owlcarousel/assets/owl.carousel.css',
                    '/lib/owlcarousel/assets/owl.theme.default.min.css',
                    '/lib/owlcarousel/assets/owl.theme.default.css',
                    '/lib/owlcarousel/assets/owl.theme.green.css',
                    '/lib/owlcarousel/assets/owl.theme.green.min.css',
                    '/lib/waypoints/waypoints.min.js',
                    '/lib/waypoints/links.php',
                    '/mail/contact.php',
                    '/mail/contact.js',
                    '/mail/jqBootsrapValidation.min.js',
                    '/scss/style.scss',
                    '/scss/bootstrap/bootstrap-grid.scss',
                    '/scss/boostrap/bootstrap-reboot.scss',
                    '/scss/boostrap/bootstrap.scss',
                    '/scss/bootstrap/scss/_button-group.scss',
                    '/scss/bootstrap/scss/_alert.scss',
                    '/scss/bootstrap/scss/_badge.scss',
                    '/scss/bootstrap/scss/_breadcrumb.scss',
                    '/scss/bootstrap/scss/_buttons.scss',
                    '/scss/bootstrap/scss/_card.scss',
                    '/scss/bootstrap/scss/_carousel.scss',
                    '/scss/bootstrap/scss/_close.scss',
                    '/scss/bootstrap/scss/_code.scss',
                    '/scss/bootstrap/scss/_custom-forms.scss',
                    '/scss/bootstrap/scss/_dropdown.scss',
                    '/scss/bootstrap/scss/_forms.scss',
                    '/scss/bootstrap/scss/_grid.scss',
                    '/scss/bootstrap/scss/_images.scss',
                    '/scss/bootstrap/scss/_input-group.scss',
                    '/scss/bootstrap/scss/_jumbotron.scss',
                    '/scss/bootstrap/scss/_list-group.scss',
                    '/scss/bootstrap/scss/_media.scss',
                    '/scss/bootstrap/scss/_mixins.scss',
                    '/scss/bootstrap/scss/_modal.scss',
                    '/scss/bootstrap/scss/_nav.scss',
                    '/scss/bootstrap/scss/_navbar.scss',
                    '/scss/bootstrap/scss/_pagination.scss',
                    '/scss/bootstrap/scss/_popover.scss',
                    '/scss/bootstrap/scss/_progress.scss',
                    '/scss/bootstrap/scss/_reboot.scss',
                    '/scss/bootstrap/scss/_root.scss',
                    '/scss/bootstrap/scss/_spinners.scss',
                    '/scss/bootstrap/scss/_tables.scss',
                    '/scss/bootstrap/scss/_toasts.scss',
                    '/scss/bootstrap/scss/_tooltip.scss',
                    '/scss/bootstrap/scss/_transitions.scss',
                    '/scss/bootstrap/scss/_type.scss',
                    '/scss/bootstrap/scss/_utilities.scss',
                    '/scss/bootstrap/scss/_variables.scss',
                    '/scss/bootstrap/scss/mixins/_alert.scss',
                    '/scss/bootstrap/scss/mixins/_background-variant.scss',
                    '/scss/bootstrap/scss/mixins/_badge.scss',
                    '/scss/bootstrap/scss/mixins/_border-radius.scss',
                    '/scss/bootstrap/scss/mixins/_box-shadow.scss',
                    '/scss/bootstrap/scss/mixins/_breakpoints.scss',
                    '/scss/bootstrap/scss/mixins/_buttons.scss',
                    '/scss/bootstrap/scss/mixins/_caret.scss',
                    '/scss/bootstrap/scss/mixins/_clearfix.scss',
                    '/scss/bootstrap/scss/mixins/_deprecate.scss',
                    '/scss/bootstrap/scss/mixins/_float.scss',
                    '/scss/bootstrap/scss/mixins/_forms.scss',
                    '/scss/bootstrap/scss/mixins/_gradients.scss',
                    '/scss/bootstrap/scss/mixins/_grid-framework.scss',
                    '/scss/bootstrap/scss/mixins/_grid.scss',
                    '/scss/bootstrap/scss/mixins/_hover.scss',
                    '/scss/bootstrap/scss/mixins/_image.scss',
                    '/scss/bootstrap/scss/mixins/_list-group.scss',
                    '/scss/bootstrap/scss/mixins/_nav-divider.scss',
                    '/scss/bootstrap/scss/mixins/_pagination.scss',
                    '/scss/bootstrap/scss/mixins/_reset-text.scss',
                    '/scss/bootstrap/scss/mixins/_resize.scss',
                    '/scss/bootstrap/scss/mixins/_screen-reader.scss',
                    '/scss/bootstrap/scss/mixins/_size.scss',
                    '/scss/bootstrap/scss/mixins/_table-row.scss',
                    '/scss/bootstrap/scss/mixins/_text-emphasis.scss',
                    '/scss/bootstrap/scss/mixins/_text-hide.scss',
                    '/scss/bootstrap/scss/mixins/_text-truncate.scss',
                    '/scss/bootstrap/scss/mixins/_transition.scss',
                    '/scss/bootstrap/scss/mixins/_visibility.scss',
                    '/scss/bootstrap/scss/utilities/_align.scss',
                    '/scss/bootstrap/scss/utilities/_background.scss',
                    '/scss/bootstrap/scss/utilities/_borders.scss',
                    '/scss/bootstrap/scss/utilities/_clearfix.scss',
                    '/scss/bootstrap/scss/utilities/_display.scss',
                    '/scss/bootstrap/scss/utilities/_embed.scss',
                    '/scss/bootstrap/scss/utilities/_flex.scss',
                    '/scss/bootstrap/scss/utilities/_float.scss',
                    '/scss/bootstrap/scss/utilities/_interactions.scss',
                    '/scss/bootstrap/scss/utilities/_overflow.scss',
                    '/scss/bootstrap/scss/utilities/_position.scss',
                    '/scss/bootstrap/scss/utilities/_screenreaders.scss',
                    '/scss/bootstrap/scss/utilities/_shadows.scss',
                    '/scss/bootstrap/scss/utilities/_shadows.scss',
                    '/scss/bootstrap/scss/utilities/_sizing.scss',
                    '/scss/bootstrap/scss/utilities/_spacing.scss',
                    '/scss/bootstrap/scss/utilities/_stretched-link.scss',
                    '/scss/bootstrap/scss/utilities/_text.scss',
                    '/scss/bootstrap/scss/utilities/_visibility.scss',
                    '/scss/bootstrap/scss/vendor/_rfs.scss',
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