module.exports = {
    "options": {
        "flatten": true,
        "layout": "default.hbs",
        "layoutdir": "src/templates/layouts",
        "assets": "dist/assets",
        "partials": [
            "src/templates/pages/*.hbs",
            "src/templates/parts/*.hbs"
        ],
        "data": ['src/templates/data/**/*.json']
    },
    "dev": {
        "files": {
            "dist/": ["src/templates/pages/*.hbs"]
        }
    },
    "build": {
        "options": {
            "assets": "build/assets"
        },
        "files": {
            "build/": ["src/templates/pages/*.hbs"]
        }
    }
}
