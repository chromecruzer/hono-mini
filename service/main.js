function register() {
    navigator.serviceWorker
        .register('/service/sw.js', { scope: '/service/', type: 'module' })
        .then(
            function (_registration) {
                console.log('Register Service Worker: Success')
            },
            function (_error) {
                console.log('Register Service Worker: Error')
            }
        )
}
function start() {
    navigator.serviceWorker
        .getRegistrations()
        .then(function (registrations) {
            for (const registration of registrations) {
                console.log('Unregister Service Worker')
                registration.unregister()
            }
            register()
        })
}
start()
