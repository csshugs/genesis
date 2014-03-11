module.exports = function(grunt) {


    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        sprite: 'grunt-spritesmith',
        notify: 'grunt-notify',
        notify_hooks: 'grunt-notify'
    });
    var configs = require('load-grunt-configs')(grunt);
    grunt.initConfig(configs);


    // Initial dev task, cleans /dist, opens the site in the browser.
    grunt.registerTask('init', [
        'clean:dev',
        'copy:js',
        'concat:dev',
        'copy:img',
        'copy:fonts',
        'assemble:dev',
        'concurrent',
        'jshint:dev',
        'connect',
        'open',
        'watch'
    ]);

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
        'notify:server',
        'notify_hooks',
        'watch'
    ]);

    // Deploy task, compressing the css and concatenating the js files
    grunt.registerTask('deploy', [
        'clean:build',
        'sass:build',
        'copy:deploy',
        'copy:modernizr',
        'copy:jquery',
        'assemble:build',
        'autoprefixer',
        'concat:dev',
        'concat:build',
        'jshint:build',
        'uglify',
        'processhtml',
        'clean:plugins',
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