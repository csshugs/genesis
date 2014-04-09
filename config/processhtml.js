module.exports = {
    "options": {
        "data": {
            "message": "Hello world!"
        }
    },
    "build": {
        "files": [
            {
                "expand": true,
                "cwd": "./src/templates/layouts",
                "src": ["./**/*.*"],
                "dest": "src/templates/layouts"
            },
            {
                "src/templates/parts/_page-head.hbs": "src/templates/parts/_page-head.hbs"
            }
        ]
    }
}
