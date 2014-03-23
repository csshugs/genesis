module.exports = {
    "options": {
        "priorities": {
            "low": /(REFACTOR|TODO:low)/,
            "med": /(FIXME|TODO:med)/,
            "high": /(BUG|TODO:high)/
    },
    "verbose": false
    },
    "scripts": {
        "src": ["./src/assets/**/*.js"]
    },
    "style": {
        "src": ["./src/assets/**/*.scss"]
    }
}
