module.exports = {
    "options": {
        "browsers": [
            "last 3 version",
            "ie 8",
            "ie 9",
            "ie 10"
        ]
    },
    "dev": {
        "src": "<%= globalConfig.dist %>/assets/css/style.css"
    },
    "deploy": {
        "src": "<%= globalConfig.build %>/assets/css/style.css"
    },
    "cms": {
        "src": "<%= globalConfig.cms %>/css/style.css"
    }
}
