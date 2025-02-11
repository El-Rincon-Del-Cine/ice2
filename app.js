if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./ws.js', {scope: './'})
            .then(function(registration){
                console.log('Services Worker registrdo!!', registration);
            })
            .catch(function(error) {
                console.log('Error al registrar el service worker', error);
            });
        }