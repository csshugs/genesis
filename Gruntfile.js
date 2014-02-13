module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/assets/css/style.css': 'app/assets/css/style.scss'
                }
            },
            build: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/assets/css/style.css': 'app/assets/css/style.scss'
                }
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
            dev: {
                files: {'dist/': ['app/templates/pages/*.hbs' ]},
            },
            build: {
                options: {
                    assets: 'build/assets'
                },
                files: {'build/': ['app/templates/pages/*.hbs' ]},
            }
        },

        watch: {
            scss: {
                files: ['app/assets/css/**/{.*,*,*/*}'],
                tasks: 'scss'
            },
            html: {
                files: ['app/templates/**/*.hbs'],
                tasks: 'html'
            },
            js: {
                files: ['app/assets/js/**/{.*,*,*/*}'],
                tasks: 'js'
            },
            img: {
                files: ['app/assets/img/**/{.*,*,*/*}'],
                tasks: 'img'
            },
            sprite: {
                files: ['app/assets/img/css/sprites/src/{.*,*,*/*}'],
                tasks: 'copysprite'
            },
            livereload: {
                options: {
                    livereload: true,
                    debounceDelay: 600
                },
                files: [
                    'dist/**/*.html',
                    'dist/assets/css/{,*/}*.css',
                    'dist/assets/js/{,*/}*.*',
                    'dist/assets/img/{,*/}*.*'
                ]
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
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

        copy: {
            deploy: {
                files: [
                    { expand: true, cwd: './app/assets/js', src: ['./vendor/*.*'], dest: 'build/assets/js' },
                    { expand: true, cwd: './app/assets/img', src: ['./**/*.*'], dest: 'build/assets/img' },
                    { expand: true, cwd: './app/assets/fonts', src: ['./**/*.*'], dest: 'build/assets/fonts' }
                ]
            },
            js: {
                files: [
                    { expand: true, cwd: './app/assets/js', src: ['*.*'], dest: 'dist/assets/js' }
                ]
            },
            modernizr: {
                src: './bower_components/modernizr/modernizr.js',
                dest: 'build/assets/js/vendor/modernizr.js'
            },
            jquery: {
                src: './bower_components/jquery/jquery.min.js',
                dest: 'build/assets/js/vendor/jquery.min.js'
            },
            img: {
                files: [
                    { expand: true, cwd: './app/assets/img', src: ['./**/*.*'], dest: 'dist/assets/img' }
                ]
            },
            fonts: {
                files: [
                    { expand: true, cwd: './app/assets/fonts', src: ['./**/*.*'], dest: 'dist/assets/fonts' }
                ]
            }
        },

        sprite:{
            all: {
                src: 'app/assets/img/css/sprites/src/*.png',
                destImg: 'app/assets/img/css/sprites/s.png',
                destCSS: 'app/assets/css/ui/base/_sprites.scss',
                imgPath: '../../assets/img/css/sprites/s.png',
                cssFormat: 'scss',
                cssOpts: {
                    cssClass: function (item) {
                      return '.s--' + item.name;
                    }
              }
            }
        },

        concat: {
            options: {
                separator: ' ',
            },
            dev: {
                src: ['./app/assets/js/plugins/*.js'],
                dest: 'dist/assets/js/plugins/plugins.js',
            },
            build: {
                src: ['./dist/assets/js/plugins/plugins.js', './app/assets/js/script.js'],
                dest: 'build/assets/js/script.js',
            },
        },

        uglify: {
            script: {
                files: {
                    'build/assets/js/script.js': ['build/assets/js/script.js']
                }
            },
            modernizr: {
                files: {
                    'build/assets/js/vendor/modernizr.js': ['build/assets/js/vendor/modernizr.js']
                }
            }
        },

        clean: {
            dev: {
                src: ["./dist"]
            },
            build: {
                src: ["./build"]
            },
            plugins: {
                src: ["./dist/assets/js/plugins/"]
            }
        },

        autoprefixer: {
            deploy: {
                options: {
                    browsers: ['last 3 version', 'ie 8', 'ie 9']
                },
                src: 'build/assets/css/style.css'
            },
        },

        jshint: {
            dev: ['dist/assets/js/script.js'],
            build: ['build/assets/js/script.js']
        },

        processhtml: {
            options: {
                data: {
                    message: 'Hello world!'
                }
            },
            build: {
                files: [
                    {
                        expand: true,
                        cwd: './build/',
                        src: ['*.html'],
                        dest: './build/'
                    }
                ]
            }
        },

        concurrent: {
            dev: [
                'sass:dev'
            ]
        }

    });



    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-processhtml');



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
        'clean:plugins'
    ]);

    grunt.registerTask('scss', [
        'sass:dev'
    ]);

    grunt.registerTask('html', [
        'assemble'
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