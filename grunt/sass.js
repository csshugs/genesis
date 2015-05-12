module.exports = {
    options: {
        includePaths: [
            'bower_components/'
        ],
        sourcemap: false
    },
    dev: {
        options: {
            outputStyle: 'nested',
            sourceComments: true
        },
        files: {
            '<%= globalConfig.dev.stylesheet %>': '<%= globalConfig.source.stylesheet %>'
        }
    },
    build: {
        options: {
            outputStyle: 'compressed'
        },
        files: {
            '<%= globalConfig.build.stylesheet %>': '<%= globalConfig.source.stylesheet %>'
        }
    }
};
