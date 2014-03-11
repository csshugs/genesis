module.exports = {
    "dev": {
        "options": {
            "style": "expanded"
        },
        "files": {
            "dist/assets/css/style.css": "app/assets/css/style.scss"
        }
    },
    "build": {
        "options": {
            "style": "compressed"
        },
        "files": {
            "build/assets/css/style.css": "app/assets/css/style.scss"
        }
    }
}
