module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg     : grunt.file.readJSON('package.json'),
        sass    :   {
            expanded: {
                options: {
                    outputStyle: 'expanded',
                    sourcemap: false
                },
                files: {
                    'dist/css/mt-card.css': 'build/sass/mt-card.scss'
                }
            },
            min: {
                options: {
                    outputStyle: 'compressed',
                    sourcemap: false
                },
                files: {
                    'dist/css/mt-card.min.css': 'build/sass/mt-card.scss'
                }
            },
        },
        postcss : {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: [
                            'last 2 versions',
                            'Chrome >= 30',
                            'Firefox >= 30',
                            'ie >= 10',
                            'Safari >= 8'
                        ]
                    })
                ]
            },
            expanded: {
                src: 'dist/css/mt-card.css'
            },
            min: {
                src: 'dist/css/mt-card.min.css'
            },
        },
        watch   : {
            sass: {
                files: ['build/sass/*.scss'],
                tasks: ['sass_compile'],
                options: {
                    interrupt: false,
                    spawn: false
                }
            }
        },
        notify  :   {
            sass_compile   :   {
                options: {
                    title  : 'Material Card',
                    message: 'SASS finished compiling',
                    success: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', [
        'watch:sass',
        'sass:expanded',
        'sass:min',
        'postcss:expanded',
        'postcss:min',
        'notify:sass_compile'
    ]);

    grunt.registerTask('sass_compile', [
        'sass:expanded',
        'sass:min',
        'postcss:expanded',
        'postcss:min',
        'notify:sass_compile'
    ]);
};