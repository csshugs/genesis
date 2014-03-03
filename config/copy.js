module.exports = {
    "deploy": {
        "files": [
            {
                "expand": true,
                "cwd": "./app/assets/js",
                "src": ["./vendor/*.*"],
                "dest": "build/assets/js"
            },
            {
                "expand": true,
                "cwd": "./app/assets/img",
                "src": ["./**/*.*"],
                "dest": "build/assets/img"
            },
            {
                "expand": true,
                "cwd": "./app/assets/fonts",
                "src": ["./**/*.*"],
                "dest": "build/assets/fonts"
            }
        ]
    },
    "js": {
        "files": [
            {
                "expand": true,
                "cwd": "./app/assets/js",
                "src": ["*.*"],
                "dest": "dist/assets/js"
            }
        ]
    },
    "modernizr": {
        "src": "./bower_components/modernizr/modernizr.js",
        "dest": "build/assets/js/vendor/modernizr.js"
    },
    "jquery": {
        "src": "./bower_components/jquery/jquery.min.js",
        "dest": "build/assets/js/vendor/jquery.min.js"
    },
    "img": {
        "files": [
            {
                "expand": true,
                "cwd": "./app/assets/img",
                "src": ["./**/*.*"],
                "dest": "dist/assets/img"
            }
        ]
    },
    "fonts": {
        "files": [
            {
                "expand": true,
                "cwd": "./app/assets/fonts",
                "src": ["./**/*.*"],
                "dest": "dist/assets/fonts"
            }
        ]
    }
}