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
        "src": ["./app/assets/**/*.js"]
    },
    "style": {
        "src": ["./app/assets/**/*.scss"]
    }
}