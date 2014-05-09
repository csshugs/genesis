module.exports = function(grunt) {


    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        sprite: 'grunt-spritesmith'
    });

    var configs = require('load-grunt-configs')(grunt);
    grunt.initConfig(configs);


    // Default dev task without open.
    grunt.registerTask('default', [
        'clean:dev',
        'copy:js',
        'concat:dev',
        'copy:img',
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
        'copy:deploy',
        'copy:modernizr',
        'copy:jquery',
        'processhtml',
        'assemble:build',
        'autoprefixer',
        'concat:dev',
        'concat:build',
        'clean:temp',
        'jshint:build',
        'uglify',
        'todos'
    ]);

    grunt.registerTask('scss', [
        'sass:dev'
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
        'copy:img'
    ]);

    grunt.registerTask('copysprite', [
        'sprite',
        'copy:img'
    ]);


};
