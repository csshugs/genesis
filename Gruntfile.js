module.exports = function(grunt) {



    var globalConfig = {
        // Assets destinaion paths
        dev: 'dist', // Path to dev output (`grunt`)
        build: 'build', // Path to build output (`grunt deploy`)
        cms: 'cms' // Path to cms (e.g. '../wordpress/wp-content/themes/twentyfifteen')
    };



    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {

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
        'concat:cms',
        'copy:img',
        'copy:img_cms',
        'copy:fonts_cms',
        'copy:fonts',
        'assemble:dev',
        'concurrent',
        'autoprefixer',
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
        'concat:cms',
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


};
