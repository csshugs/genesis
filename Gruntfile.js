module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scss: {
                files: ['app/assets/css/**/*.scss'],
                tasks: 'scss'
            },
            html: {
                files: ['app/templates/**/*.hbs'],
                tasks: 'html'
            },
            js: {
                files: ['app/assets/js/**/*.js'],
                tasks: 'js'
            },
            livereload: {
                options: {
                    livereload: true,
                    debounceDelay: 600
                },
                files: [
                    'dist/**/*.html',
                    'dist/assets/css/{,*/}*.css',
                    'dist/assets/js/{,*/}*.js'
                ]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: true
                },    
                files: [{
                    expand: true,
                    cwd: 'app/assets/css',
                    src: ['style.scss'],
                    dest: 'app/assets/css',
                    ext: '.css'
                }]
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    // change this to '0.0.0.0' or '*' to access the server from outside
                    hostname: '0.0.0.0',
                    base: './'
                }
            }
        },

        open: {
            server: {
                path: 'http://localhost:<%= connect.server.options.port %>'
            }
        },

        assemble: {
            options: {
                flatten: true,
                layout: 'default.hbs',
                layoutdir: 'app/templates/layouts',
                assets: 'dist/assets',
                partials: ['app/templates/pages/*.hbs', 'app/templates/parts/*.hbs']
            },
            generate: {
                files: {
                    'dist/': ['app/templates/pages/*.hbs']
                }
            }
        },

        copy: {
            css: {
                files: [
                    { expand: true, cwd: './app/assets/css', src: ['./**/*.*'], dest: 'dist/assets/css' }
                ]
            },
            js: {
                files: [
                    { expand: true, cwd: './app/assets/js', src: ['./**/*.*'], dest: 'dist/assets/js' }
                ]
            }
        },

        concurrent: {
            dev: [
                'sass'
            ]
        }

    });

    // Load the plugins.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('assemble');

    // Default task(s).
    grunt.registerTask('default', [
        'copy',
        'assemble',
        'concurrent:dev',
        'connect',
        'open',
        'watch'
    ]);

    grunt.registerTask('scss', [
        'sass',
        'copy:css'
    ]);
    grunt.registerTask('html', [
        'assemble'
    ]);
    grunt.registerTask('js', [
        'copy:js'
    ]);

};