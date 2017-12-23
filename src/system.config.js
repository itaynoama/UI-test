System.config({
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js',
            baseURL: '/src/'
        }
    }
});
System.import('app/main')
    .then(null, console.error.bind(console));