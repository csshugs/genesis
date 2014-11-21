module.exports = {
    "scss": {
        "files": ["src/assets/css/**/{.*,*,*/*}"],
        "tasks": "scss"
    },
    "html": {
        "files": ["src/templates/**/{.*,*,*/*}"],
        "tasks": "html"
    },
    "js": {
        "files": ["src/assets/js/**/{.*,*,*/*}"],
        "tasks": "js"
    },
    "img": {
        "files": ["src/assets/img/**/{.*,*,*/*}"],
        "tasks": "img"
    },
    "sprite": {
        "files": ["src/assets/img/css/sprites/src/{.*,*,*/*}"],
        "tasks": "copysprite"
    },
    "fonts": {
        "files": ["src/assets/fonts/{.*,*,*/*}"],
        "tasks": "fonts"
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
            "<%= globalConfig.dev %>/**/*.html",
            "<%= globalConfig.dev %>/assets/css/{,*/}*.css",
            "<%= globalConfig.dev %>/assets/js/{,*/}*.*",
            "<%= globalConfig.dev %>/assets/img/{,*/}*.*"
        ]
    }
}
