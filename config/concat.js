module.exports = {
    "options": {
        "separator": " "
    },
    "dev": {
        "src": ["./app/assets/js/plugins/*.js"],
        "dest": "dist/assets/js/plugins/plugins.js"
    },
    "build": {
        "src": [
            "./dist/assets/js/plugins/plugins.js",
            "./app/assets/js/script.js"
        ],
        "dest": "build/assets/js/script.js"
    }
}
