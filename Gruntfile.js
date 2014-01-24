module.exports = function(grunt) {



    require('time-grunt')(grunt);



    grunt.initConfig({



        genesis: {
            app: 'app',
            dist: 'dist'
        },



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
            compressed: {
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
            modernizr_dev: {
                src: './bower_components/modernizr/modernizr.js',
                dest: 'dist/assets/js/vendor/modernizr.js'
            },
            modernizr_build: {
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
                src: ['./build/assets/js/plugins/plugins.js', './app/assets/js/script.js'],
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

        dev_prod_switch: {
            options: {
                environment: '',
                env_char: '#',
                env_block_dev: 'env:dev',
                env_block_prod: 'env:prod'
            },
            dev: {
                options: {
                    environment: 'dev'
                },
                files: [
                    {
                        expand: true,
                        cwd: './dist/',
                        src: ['*.html'],
                        dest: './dist/'
                    }
                ]
            },
            build: {
                options: {
                    environment: 'prod'
                },
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
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-dev-prod-switch');



    // Initial dev task, cleans /dist, opens the site in the browser.
    grunt.registerTask('init', [
        'clean:dev',
        'copy:modernizr_dev',
        'copy:js',
        'concat:dev',
        'copy:img',
        'copy:fonts',
        'assemble:dev',
        'concurrent',
        'connect',
        'open',
        'dev_prod_switch:dev',
        'watch'
    ]);

    // Default dev task without open.
    grunt.registerTask('default', [
        'clean:dev',
        'copy:modernizr_dev',
        'copy:js',
        'concat:dev',
        'copy:img',
        'copy:fonts',
        'assemble:dev',
        'concurrent',
        'connect',
        'dev_prod_switch:dev',
        'watch'
    ]);

    // Deploy task, compressing the css and concatenating the js files
    grunt.registerTask('deploy', [
        'clean:build',
        'sass:compressed',
        'copy:deploy',
        'copy:modernizr_build',
        'copy:jquery',
        'assemble:build',
        'autoprefixer',
        'concat:dev',
        'concat:build',
        'uglify',
        'dev_prod_switch:build',
        'clean:plugins'
    ]);

    grunt.registerTask('scss', [
        'sass:dev'
    ]);

    grunt.registerTask('html', [
        'assemble',
        'dev_prod_switch:dev'
    ]);

    grunt.registerTask('js', [
        'copy:js',
        'concat:dev'
    ]);

    grunt.registerTask('img', [
        'copy:img'
    ]);

    grunt.registerTask('copysprite', [
        'sprite',
        'copy:img'
    ]);



};