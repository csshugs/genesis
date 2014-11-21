module.exports = function(grunt) {



    var globalConfig = {
        dev: 'dist',
        build: 'build',
        cms: 'cms'
    };



    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {
                sprite: 'grunt-spritesmith'
            }
        },
        config: {
            globalConfig: globalConfig
        }
    });


    // Default dev task without open.
    grunt.registerTask('default', [
        'clean:dev',
        'copy:js',
        'concat:dev',
        'copy:img',
        'copy:img_cms',
        'copy:fonts_cms',
        'copy:fonts',
        'assemble:dev',
        'concurrent',
        'jshint:dev',
        'connect',
        'watch'
    ]);

    // Deploy task, compressing the css and concatenating the js files
    grunt.registerTask('deploy', [
        'clean:build',
        'sass:build',
        'copy:css_compressed',
        'copy:deploy',
        'copy:img_cms',
        'copy:fonts_cms',
        'copy:modernizr',
        'copy:jquery',
        'processhtml',
        'assemble:build',
        'autoprefixer',
        'concat:dev',
        'concat:build',
        'clean:temp',
        'uglify'
    ]);

    grunt.registerTask('scss', [
        'sass:dev',
        'copy:css_expanded'
    ]);

    grunt.registerTask('html', [
        'assemble:dev'
    ]);

    grunt.registerTask('js', [
        'copy:js',
        'concat:dev',
        'jshint:dev'
    ]);

    grunt.registerTask('img', [
        'copy:img',
        'copy:img_cms'
    ]);

    grunt.registerTask('fonts', [
        'copy:fonts',
        'copy:fonts_cms'
    ]);

    grunt.registerTask('copysprite', [
        'sprite',
        'copy:img'
    ]);


};
