module.exports = {
    "options": {
        "separator": " "
    },
    "dev": {
        "src": ["src/assets/js/plugins/*.js"],
        "dest": "<%= globalConfig.dev %>/assets/js/plugins/plugins.js"
    },
    "build": {
        "src": [
            "<%= globalConfig.dev %>/assets/js/plugins/plugins.js",
            "src/assets/js/script.js"
        ],
        "dest": "<%= globalConfig.build %>/assets/js/script.js"
    },
    "cms": {
        "src": [
            "<%= globalConfig.dev %>/assets/js/plugins/plugins.js",
            "src/assets/js/script.js"
        ],
        "dest": "<%= globalConfig.cms %>/js/script.js"
    }
}
