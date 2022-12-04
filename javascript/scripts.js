// Name: Christy Varghese
// Student ID: 1082636
// Course: INFO 6128
// Date: 13 Nov 2022
// Professor: Marcelo Hespanhol
// Lab 04
// Link: https://christy-varghese.github.io/Lab04/




// service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service_worker.js', {
                scope: '/PWA-Lab05/'
            })
            .then((reg) => {
                console.log('Service worker registered.', reg);
            })
            .catch((err) => {
                console.log('Service worker registration failed.', err);
            });
    });
} else {
    console.log('Service worker not supported.');
}