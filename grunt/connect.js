module.exports = {
    options: {
        port: 8000,
        hostname: 'localhost',
        livereload: 35729
    },
    server: {
        options: {
            base: './<%= globalConfig.dev.dev %>'
        }
    }
};
