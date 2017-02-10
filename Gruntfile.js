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
        'copy:imgDev',
        'copy:imgBuild',
        'copy:fontsDev',
        'copy:fontsBuild',
        'copy:jsDev',
        'copy:jsBuild',
        'concurrent',
        'autoprefixer',
        'assemble'
    ]);

    // Dev task.
    grunt.registerTask('dev', [
        'default',
        'connect',
        'watch'
    ]);



};
