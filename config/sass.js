module.exports = {
    "dev": {
        "options": {
            "style": "expanded",
            "require": "sass-globbing"
        },
        "files": {
            "dist/assets/css/style.css": "src/assets/css/style.scss"
        }
    },
    "build": {
        "options": {
            "style": "compressed",
            "require": "sass-globbing"
        },
        "files": {
            "build/assets/css/style.css": "src/assets/css/style.scss"
        }
    }
}
