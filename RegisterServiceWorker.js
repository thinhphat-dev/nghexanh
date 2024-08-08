
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('ServiceWorker.js').then(function(registration) {
        console.log('Service Worker Registered');
    }).catch(function(error) {
        console.log('Service Worker Registration failed:', error);
    });
} else {
    console.log('Service Worker not supported');
}