module.exports = {
    "options": {
        "require": "sass-globbing",
        "loadPath": "bower_components"
    },
    "dev": {
        "options": {
            "style": "expanded",
            "lineNumbers": true,
            "sourcemap": true
        },
        "files": {
            "dist/assets/css/style.css": "src/assets/css/style.scss"
        }
    },
    "build": {
        "options": {
            "style": "compressed"
        },
        "files": {
            "build/assets/css/style.css": "src/assets/css/style.scss"
        }
    }
}
