module.exports = {
    scss: {
        files: ['<%= globalConfig.source.css %>/**/{.*,*,*/*}'],
        tasks: ['sass']
    },
    html: {
        files: ['<%= globalConfig.source.templates %>/**/{.*,*,*/*}'],
        tasks: ['assemble:dev']
    },
    js: {
        files: ['<%= globalConfig.source.js %>/**/{.*,*,*/*}'],
        tasks: ['copy:jsDev']
    },
    img: {
        files: ['<%= globalConfig.source.img %>/**/{.*,*,*/*}'],
        tasks: ['copy:imgDev']
    },
    fonts: {
        files: ['<%= globalConfig.source.fonts %>/**/{.*,*,*/*}'],
        tasks: ['copy:fontsDev']
    },
    livereload: {
        options: {
            livereload: 35729
        },
        files: [
            '<%= globalConfig.dev.dev %>/**/*.html',
            '<%= globalConfig.dev.css %>/*.css',
            '<%= globalConfig.dev.js %>/**/*',
            '<%= globalConfig.dev.img %>/**/*'
        ]
    }
}
