module.exports = {
    "options": {
        "flatten": true,
        "layout": "default.hbs",
        "layoutdir": "app/templates/layouts",
        "assets": "dist/assets",
        "partials": [
            "app/templates/pages/*.hbs",
            "app/templates/parts/*.hbs"
        ]
    },
    "dev": {
        "files": {
            "dist/": ["app/templates/pages/*.hbs"]
        }
    },
    "build": {
        "options": {
            "assets": "build/assets"
        },
        "files": {
            "build/": ["app/templates/pages/*.hbs"]
        }
    }
}