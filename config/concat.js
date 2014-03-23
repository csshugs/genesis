module.exports = {
    "options": {
        "separator": " "
    },
    "dev": {
        "src": ["./src/assets/js/plugins/*.js"],
        "dest": "dist/assets/js/plugins/plugins.js"
    },
    "build": {
        "src": [
            "./dist/assets/js/plugins/plugins.js",
            "./src/assets/js/script.js"
        ],
        "dest": "build/assets/js/script.js"
    }
}
