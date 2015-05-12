module.exports = {
    bsFiles: {
        src : '<%= globalConfig.dev.css %>/*.css'
    },
    options: {
        watchTask: true,
        port: 8000,
        ui: {
            port: 8001
        },
        server: {
            baseDir: "./<%= globalConfig.dev.dev %>/"
        }
    }
};
