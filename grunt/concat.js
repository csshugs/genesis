module.exports = {
    options: {
        separator: ' ',
    },
    jsVendor: {
        src: [
            '<%= globalConfig.source.js %>/vendor/libs/*.js',
            '<%= globalConfig.source.js %>/vendor/plugins/*.js'
        ],
        dest: '<%= globalConfig.cms.js %>/vendor.min.js'
    }
};
