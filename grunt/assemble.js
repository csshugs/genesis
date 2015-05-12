module.exports = {
    options: {
        flatten: true,
        layout: 'default.hbs',
        layoutdir: '<%= globalConfig.source.templates %>/layouts',
        assets: '<%= globalConfig.dev.dev %>/assets',
        partials: [
            '<%= globalConfig.source.templates %>/pages/*.hbs',
            '<%= globalConfig.source.templates %>/parts/*.hbs'
        ],
        data: ['<%= globalConfig.source.templates %>/data/**/*.json']
    },
    dev: {
        files: {
            '<%= globalConfig.dev.dev %>/': ['<%= globalConfig.source.templates %>/pages/*.hbs']
        }
    },
    build: {
        options: {
            assets: '<%= globalConfig.build.build %>/assets'
        },
        files: {
            '<%= globalConfig.build.build %>/': ['<%= globalConfig.source.templates %>/pages/*.hbs']
        }
    }
}
