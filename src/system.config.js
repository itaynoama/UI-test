System.config({
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js',
            baseURL: '/UI-test/'
        }
    }
});
System.import('app/main')
    .then(null, console.error.bind(console));