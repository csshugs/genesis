module.exports = {
    "scss": {
        "files": ["app/assets/css/**/{.*,*,*/*}"],
        "tasks": "scss"
    },
    "html": {
        "files": ["app/templates/**/*.hbs"],
        "tasks": "html"
    },
    "js": {
        "files": ["app/assets/js/**/{.*,*,*/*}"],
        "tasks": "js"
    },
    "img": {
        "files": ["app/assets/img/**/{.*,*,*/*}"],
        "tasks": "img"
    },
    "sprite": {
        "files": ["app/assets/img/css/sprites/src/{.*,*,*/*}"],
        "tasks": "copysprite"
    },
    "grunt": {
        "files": [
            'Gruntfile.js',
            'config/*.js'
        ]
    },
    "livereload": {
        "options": {
            "livereload": true
        },
        "files": [
            "dist/**/*.html",
            "dist/assets/css/{,*/}*.css",
            "dist/assets/js/{,*/}*.*",
            "dist/assets/img/{,*/}*.*"
        ]
    }
}