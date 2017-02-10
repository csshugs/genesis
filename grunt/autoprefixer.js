module.exports = {
    options: {
        browsers: [
            'last 3 version',
            'ie 9',
            'ie 10'
        ]
    },
    build: {
        src: '<%= globalConfig.build.stylesheet %>'
    }
};
