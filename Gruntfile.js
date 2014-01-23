module.exports = function(grunt) {



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
            compressed: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/assets/css/style.css': 'app/assets/css/style.scss'
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
            deploy: {
                options: {layout: 'default--deploy.hbs' },
                files: {'dist/': ['app/templates/pages/*.hbs' ]},
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
                files: ['app/assets/js/*.js'],
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
                    'dist/assets/js/*.js',
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
                    { expand: true, cwd: './app/assets/js', src: ['./vendor/*.*'], dest: 'dist/assets/js' },
                    { expand: true, cwd: './app/assets/img', src: ['./**/*.*'], dest: 'dist/assets/img' },
                    { expand: true, cwd: './app/assets/fonts', src: ['./**/*.*'], dest: 'dist/assets/fonts' }
                ]
            },
            js: {
                files: [
                    { expand: true, cwd: './app/assets/js', src: ['*.*'], dest: 'dist/assets/js' }
                ]
            },
            modernizr: {
                src: './bower_components/modernizr/modernizr.js',
                dest: 'dist/assets/js/vendor/modernizr.js'
            },
            jquery: {
                src: './bower_components/jquery/jquery.min.js',
                dest: 'dist/assets/js/vendor/jquery.min.js'
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
            dist: {
                src: ['./app/assets/js/plugins.js', './app/assets/js/main.js'],
                dest: 'dist/assets/js/script.js',
            },
        },

        uglify: {
            script: {
                files: {
                    'dist/assets/js/script.js': ['dist/assets/js/script.js']
                }
            },
            modernizr: {
                files: {
                    'dist/assets/js/vendor/modernizr.js': ['dist/assets/js/vendor/modernizr.js']
                }
            }
        },

        clean: {
            build: {
                src: ["./dist"]
            }
        },

        autoprefixer: {
            deploy: {
                options: {
                    browsers: ['last 3 version', 'ie 8', 'ie 9']
                },
                src: 'dist/assets/css/style.css'
            },
        },

        concurrent: {
            dev: [
                'sass'
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



    // Initial dev task, cleans /dist, opens the site in the browser.
    grunt.registerTask('init', [
        'clean:build',
        'copy:modernizr',
        'copy:js',
        'copy:img',
        'copy:fonts',
        'assemble:dev',
        'concurrent:dev',
        'connect',
        'open',
        'watch'
    ]);

    // Default dev task without open.
    grunt.registerTask('default', [
        'copy:modernizr',
        'copy:js',
        'copy:img',
        'copy:fonts',
        'assemble:dev',
        'concurrent:dev',
        'connect',
        'watch'
    ]);

    // Deploy task, compressing the css and concatenating the js files
    grunt.registerTask('deploy', [
        'clean:build',
        'sass:compressed',
        'copy:deploy',
        'copy:modernizr',
        'copy:jquery',
        'assemble:deploy',
        'autoprefixer',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('scss', [
        'sass:dev'
    ]);

    grunt.registerTask('html', [
        'assemble:dev'
    ]);

    grunt.registerTask('js', [
        'copy:js'
    ]);

    grunt.registerTask('img', [
        'copy:img'
    ]);

    grunt.registerTask('copysprite', [
        'sprite',
        'copy:img'
    ]);



};