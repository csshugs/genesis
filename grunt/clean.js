module.exports = {
    dev: {
        src: [
            '<%= globalConfig.dev.dev %>'
        ]
    },
    build: {
        src: [
            '<%= globalConfig.build.build %>'
        ]
    },
    jsVendor: {
        src: [
            '<%= globalConfig.source.js %>/vendor/'
        ]
    }
}
