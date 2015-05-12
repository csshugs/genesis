module.exports = function(grunt) {



    var globalConfig = {

        // Reference the source paths.
        source: {
            source: 'src',
            templates: 'src/templates',
            css: 'src/assets/css',
            stylesheet: 'src/assets/css/style.scss',
            js: 'src/assets/js',
            fonts: 'src/assets/fonts',
            img: 'src/assets/img'
        },

        // The dev destination directory.
        dev: {
            dev: 'dist',
            css: 'dist/assets/css',
            stylesheet: 'dist/assets/css/style.css',
            js: 'dist/assets/js',
            fonts: 'dist/assets/fonts',
            img: 'dist/assets/img'
        },

        // The build destination directory.
        build: {
            build: 'build',
            css: 'build/assets/css',
            stylesheet: 'build/assets/css/style.css',
            js: 'build/assets/js',
            fonts: 'build/assets/fonts',
            img: 'build/assets/img'
        },

        // Adjust these values to the assets destination paths of your cms
        cms: {
            css: 'cms/css',
            stylesheet: 'cms/css/style.css',
            js: 'cms/js',
            fonts: 'cms/fonts'
        }

    };



    require('time-grunt')(grunt);



    require('load-grunt-config')(grunt, {
        jitGrunt: {},
        config: {
            globalConfig: globalConfig
        }
    });


    // Default dev task without open.
    grunt.registerTask('default', [
        'clean',
        'bowerInject',
        'jsVendor',
        'copy:imgDev',
        'copy:imgBuild',
        'copy:fontsDev',
        'copy:fontsBuild',
        'copy:fontsCms',
        'copy:jsDev',
        'copy:jsBuild',
        'copy:jsCms',
        'sass_globbing',
        'concurrent',
        'copy:cssCms',
        'autoprefixer',
        'assemble'
    ]);

    // Pattern Lab dev task.
    grunt.registerTask('dev', [
        'default',
        'connect:server',
        'watch'
    ]);

    // BorwserSync task.
    grunt.registerTask('sync', [
        'default',
        'browserSync',
        'watch'
    ]);



    // Bower components injection.
    grunt.registerTask('bowerInject', [
        'clean:jsVendor',
        // 'bowercopy',
        // 'injector'
    ]);

    // Uglify and concat vendor files.
    grunt.registerTask('jsVendor', [
        'concat:jsVendor',
        'uglify:jsVendor'
    ]);


};
