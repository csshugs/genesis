module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
                files: ['app/assets/js/**/*.js'],
                tasks: 'js'
            },
            img: {
                files: ['app/assets/img/**/{.*,*,*/*}'],
                tasks: 'img'
            },
            sprite: {
                files: ['app/assets/img/css/sprites/**/{.*,*,*/*}'],
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
                    'dist/assets/js/{,*/}*.js',
                    'dist/assets/img/{,*/}*.*'
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
            },
            compressed: {
                options: {
                    style: 'compressed'
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
            dev: {
                options: {layout: 'default.hbs' },
                files: {'dist/': ['app/templates/pages/*.hbs' ]},
            },
            deploy: {
                options: {layout: 'default--deploy.hbs' },
                files: {'dist/': ['app/templates/pages/*.hbs' ]},
            }
        },

        clean: {
            build: {
                src: ["./dist"]
            },
            inuit: {
                src: ["./dist/assets/css/inuit.css/"]
            }
        },

        copy: {
            predeploy: {
                files: [
                    { expand: true, cwd: './app/assets/css', src: ['./**/*.css'], dest: 'dist/assets/css' },
                    { expand: true, cwd: './app/assets/js', src: ['./vendor/*.*'], dest: 'dist/assets/js' },
                    { expand: true, cwd: './app/assets/img', src: ['./**/*.*'], dest: 'dist/assets/img' },
                    { expand: true, cwd: './app/assets/fonts', src: ['./**/*.*'], dest: 'dist/assets/fonts' }
                ]
            },
            css: {
                files: [
                    { expand: true, cwd: './app/assets/css', src: ['./**/*.*'], dest: 'dist/assets/css' }
                ]
            },
            js: {
                files: [
                    { expand: true, cwd: './app/assets/js', src: ['./**/*.*'], dest: 'dist/assets/js' }
                ]
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

        concat: {
            options: {
                separator: ' ',
            },
            dist: {
                src: ['./app/assets/js/plugins/plugins.js', './app/assets/js/app/main.js'],
                dest: 'dist/assets/js/script.js',
            },
        },

        autoshot: {
            default_options: {
                options: {
                    path: './test/screenshots',
                    remote: {
                        files: [
                            { src: "", dest: "" }
                        ]
                    },
                    local: {
                        path: './dist',
                        port: 8000,
                        files: [
                            { src: "index.html", dest: "screenshot.jpg" }
                        ]
                    },
                    viewport: [
                        '1920x1080',
                        '1200x800',
                        '1024x768',
                        '800x600',
                        '768x1024',
                        '480x800'
                    ]
                },
            },
        },

        concurrent: {
            dev: [
                'sass'
            ]
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
        }

    });

    // Load the plugins.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-autoshot');

    // Initial dev task, opens the site in the browser.
    grunt.registerTask('init', [
        'clean:build',
        'copy:css',
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
        'clean:build',
        'copy:css',
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
        'copy:predeploy',
        'sass:dist',
        'assemble:deploy',
        'concat',
        'clean:inuit'
    ]);

    // Autoshot task, taking screenshots of the various screensizes
    grunt.registerTask('shot', [
        'clean:build',
        'sass:compressed',
        'copy:predeploy',
        'sass:dist',
        'assemble:deploy',
        'concat',
        'clean:inuit',
        'autoshot'
    ]);

    grunt.registerTask('scss', [
        'sass:dist',
        'copy:css'
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