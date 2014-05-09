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
            "layout": "default.hbs",
            "layoutdir": "temp/layouts",
            "assets": "build/assets",
            "partials": [
                "temp/pages/*.hbs",
                "temp/parts/*.hbs"
            ],
        },
        "files": {
            "build/": ["temp/pages/*.hbs"]
        }
    }
}
