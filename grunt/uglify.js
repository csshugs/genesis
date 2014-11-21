module.exports = {
    "script": {
        "files": {
            "<%= globalConfig.build %>/assets/js/script.js": ["<%= globalConfig.build %>/assets/js/script.js"]
        }
    },
    "modernizr": {
        "files": {
            "<%= globalConfig.build %>/assets/js/vendor/modernizr.js": ["<%= globalConfig.build %>/assets/js/vendor/modernizr.js"]
        }
    }
}
