module.exports = {
    "deploy": {
        "files": [
            {
                "expand": true,
                "cwd": "src/assets/img",
                "src": ["./**/*.*"],
                "dest": "<%= globalConfig.build %>/assets/img"
            },
            {
                "expand": true,
                "cwd": "src/assets/fonts",
                "src": ["./**/*.*"],
                "dest": "<%= globalConfig.build %>/assets/fonts"
            },
            {
                "expand": true,
                "cwd": "src/templates",
                "src": ["./**/*.*"],
                "dest": "temp"
            }
        ]
    },
    "modernizr": {
        "src": "bower_components/modernizr/modernizr.js",
        "dest": "<%= globalConfig.build %>/assets/js/vendor/modernizr.js"
    },
    "jquery": {
        "src": "bower_components/jquery/jquery.min.js",
        "dest": "<%= globalConfig.build %>/assets/js/vendor/jquery.min.js"
    },
    "css_expanded": {
        "files": [
            {
                "expand": true,
                "cwd": "<%= globalConfig.dev %>/assets/css",
                "src": ["*.css"],
                "dest": "<%= globalConfig.cms %>/css"
            }
        ]
    },
    "css_compressed": {
        "files": [
            {
                "expand": true,
                "cwd": "<%= globalConfig.build %>/assets/css",
                "src": ["*.css"],
                "dest": "<%= globalConfig.cms %>/css"
            }
        ]
    },
    "js": {
        "files": [
            {
                "expand": true,
                "cwd": "src/assets/js",
                "src": ["*.*"],
                "dest": "<%= globalConfig.dev %>/assets/js"
            }
        ]
    },
    "img": {
        "files": [
            {
                "expand": true,
                "cwd": "src/assets/img",
                "src": ["./**/*.*"],
                "dest": "<%= globalConfig.dev %>/assets/img"
            }
        ]
    },
    "img_cms": {
        "files": [
            {
                "expand": true,
                "cwd": "src/assets/img",
                "src": ["./**/*.*"],
                "dest": "<%= globalConfig.cms %>/img"
            }
        ]
    },
    "fonts": {
        "files": [
            {
                "expand": true,
                "cwd": "src/assets/fonts",
                "src": ["./**/*.*"],
                "dest": "<%= globalConfig.dev %>/assets/fonts"
            }
        ]
    },
    "fonts_cms": {
        "files": [
            {
                "expand": true,
                "cwd": "src/assets/fonts",
                "src": ["./**/*.*"],
                "dest": "<%= globalConfig.cms %>/fonts"
            }
        ]
    }
}
