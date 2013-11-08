module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scss: {
                files: ['css/**/*.scss'],
                tasks: 'scss'
            },
            html: {
                files: ['src/**/*.hbs'],
                tasks: 'html'
            },
            js: {
                files: ['js/**/*.js'],
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
                    style: 'expanded'
                    /*sourcemap: true*/
                },    
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['style.scss'],
                    dest: 'css',
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
                layout: 'layout.hbs',
                layoutdir: 'src/templates/layouts',
                assets: 'dist/assets',
                partials: ['src/templates/pages/*.hbs', 'src/templates/parts/*.hbs']
            },
            demo: {
                options: {
                    data: ['src/data/*.{json,yml}']
                },
                files: {
                    'dist/': ['src/templates/pages/*.hbs']
                }
            }
        },

        copy: {
            demo: {
                files: [
                    { expand: true, cwd: './css', src: ['./**/*.*'], dest: 'dist/assets/css' },
                    { expand: true, cwd: './js', src: ['./**/*.*'], dest: 'dist/assets/js' }
                ]
            },
            css: {
                files: [
                    { expand: true, cwd: './css', src: ['./**/*.*'], dest: 'dist/assets/css' }
                ]
            },
            js: {
                files: [
                    { expand: true, cwd: './js', src: ['./**/*.*'], dest: 'dist/assets/js' }
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