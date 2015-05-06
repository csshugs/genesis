module.exports = {
    "scss": {
        "files": ["src/assets/css/**/{.*,*,*/*}"],
        "tasks": ["scss", "autoprefixer"]
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
    "fonts": {
        "files": ["src/assets/fonts/{.*,*,*/*}"],
        "tasks": "fonts"
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
