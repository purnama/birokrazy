// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function (grunt) {

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({

        // configure jshint to validate js files -----------------------------------
        jshint: {
            options: {
                reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
            },
            all: [
                'src/main/resources/static/js/**/*.js'
            ]
        },
        ngtemplates: {
            hackMdk3App: {
                cwd: 'src/main/resources/static',
                src: 'templates/**.html',
                dest: 'src/main/resources/static/js/app.templates.js',
                options: {
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true, // Only if you don't use comment directives!
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }
        },
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
                mangle: false
            },
            build: {
                files: {
                    'src/main/resources/static/js/app.ugly.js': [
                        'src/main/resources/static/js/BirokrazyApp.js',
                        'src/main/resources/static/js/Constant.js',
                        'src/main/resources/static/js/service/*.js',
                        'src/main/resources/static/js/controller/*.js',
                        'src/main/resources/static/js/directive/*.js',
                        'src/main/resources/static/js/module/**/*.js'
                    ],
                    'src/main/resources/static/js/app.ugly.templates.js': [
                        'src/main/resources/static/js/app.templates.js'
                    ],
                    'src/main/resources/public/js/modernizr-respond.min.js': [
                        'src/main/resources/static/bower_components/modernizr/modernizr.js',
                        'src/main/resources/static/bower_components/respond/src/respond.js'
                    ]
                }
            }
        },
        concat: {
            build: {
                files: {
                    'src/main/resources/public/js/app.min.js': [
                        'src/main/resources/static/bower_components/jquery/dist/jquery.min.js',
                        'src/main/resources/static/bower_components/bootstrap/dist/js/bootstrap.min.js',
                        'src/main/resources/static/bower_components/bootstrap-star-rating/js/star-rating.min.js',
                        'src/main/resources/static/bower_components/highcharts/highcharts.js',
                        'src/main/resources/static/bower_components/angular/angular.min.js',
                        'src/main/resources/static/bower_components/angular-route/angular-route.min.js',
                        'src/main/resources/static/bower_components/ngstorage/ngStorage.min.js',
                        'src/main/resources/static/bower_components/angular-cookies/angular-cookies.min.js',
                        'src/main/resources/static/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                        'src/main/resources/static/bower_components/lodash/lodash.min.js',
                        'src/main/resources/static/bower_components/angular-simple-logger/dist/angular-simple-logger.min.js',
                        'src/main/resources/static/bower_components/angular-google-maps/dist/angular-google-maps.min.js',
                        'src/main/resources/static/bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.min.js',
                        'src/main/resources/static/bower_components/textAngular/dist/textAngular-rangy.min.js',
                        'src/main/resources/static/bower_components/textAngular/dist/textAngular-sanitize.min.js',
                        'src/main/resources/static/bower_components/textAngular/dist/textAngular.min.js',
                        'src/main/resources/static/js/app.ugly.js',
                        'src/main/resources/static/js/app.ugly.templates.js'
                    ]
                }
            }
        },
        cssmin: {
            build: {
                files: {
                    'src/main/resources/public/css/app.min.css': [
                        'src/main/resources/static/bower_components/bootstrap/dist/css/bootstrap.min.css',
                        'src/main/resources/static/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                        'src/main/resources/static/bower_components/components-font-awesome/css/font-awesome.min.css',
                        'src/main/resources/static/bower_components/bootstrap-star-rating/css/star-rating.min.css',
                        'src/main/resources/static/bower_components/textAngular/dist/textAngular.css',
                        'src/main/resources/static/css/funky-radio.css',
                        'src/main/resources/static/css/social-buttons.css',
                        'src/main/resources/static/css/box-shadow.css',
                        'src/main/resources/static/css/main.css'
                    ]
                }
            }
        },
        processhtml: {
            build: {
                files: {
                    'src/main/resources/public/index.html': ['src/main/resources/static/index.html']
                }
            }
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/main/resources/static/bower_components/bootstrap/fonts',
                        src: ['**'],
                        dest: 'src/main/resources/public/fonts/'
                    },
                    {
                        expand: true,
                        cwd: 'src/main/resources/static/bower_components/components-font-awesome/fonts',
                        src: ['**'],
                        dest: 'src/main/resources/public/fonts/'
                    },
                    {
                        expand: true,
                        cwd: 'src/main/resources/static/',
                        src: ['*.png', '*.xml', '*.ico'],
                        dest: 'src/main/resources/public/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'src/main/resources/static/error/',
                        src: ['**'],
                        dest: 'src/main/resources/public/error/'
                    },
                    {
                        expand: true,
                        cwd: 'src/main/resources/static/images/',
                        src: ['**'],
                        dest: 'src/main/resources/public/images/'
                    },
                ],
            },
        },

        clean: {
            build: {
                src: [
                    "src/main/resources/public",
                    'src/main/resources/static/js/app.ugly.js',
                    'src/main/resources/static/js/app.templates.js',
                    'src/main/resources/static/js/app.ugly.templates.js'
                ]
            }
        },

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

        // all of our configuration will go here

    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.registerTask('cleaning', ['clean']);
    grunt.registerTask('default', ['clean', 'jshint', 'ngtemplates', 'uglify', 'concat', 'cssmin', 'copy', 'processhtml']);

};