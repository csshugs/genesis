module.exports = {
    options: {
        destFile: '<%= globalConfig.source.templates %>/layouts/default.hbs',
        ignorePath: 'source',
        addRootSlash: false,
        transform: function(file, index, length) {
            return '<script src="../../' + file + '"></script>';
        }
    },
    files: {
        expand: true,
        cwd: '<%= globalConfig.source.js %>/vendor',
        src: ['**/*.js']
    }
};
