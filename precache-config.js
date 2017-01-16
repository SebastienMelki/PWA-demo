module.exports = {
    staticFileGlobs: [
        '/',
        '/?homescreen=1',
        'index.html',
        'index.html?homescreen=1',
        'images/anghami-logo.jpeg'
    ],
    runtimeCaching: [{
        urlPattern: /jsonplaceholder\.typicode\.com\/users/,
        handler: 'cacheFirst'
    }]
};