'use strict';
module.exports = function (grunt) {
    var _, hbs, component, dist;

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    _ = require('underscore');
    hbs = require('component-builder-handlebars');

    component = {
        options: {
            verbose: false,
            dev: true,
            noRequire: false,
            name: 'build',
            standalone: false,
            sourceUrls: false,
            configure: function(builder) {
                builder.use(hbs({
                    extname: '.hbs',
                    partialRegex: /^_/
                }));
            }
        },
        src: '.',
        dest: './build'
    };
    dist = _.extend(_.clone(component), {
        options: {
            verbose: true,
            dev: false,
            noRequire: true,
            name: 'dist',
            standalone: true,
            configure: function(builder) {
                builder.use(hbs({
                    extname: '.hbs',
                    partialRegex: /^_/
                }));
            }

        }
    });

    grunt.initConfig({
        clean: ['./build', './components'],
        shell: {
            dev: {
                options: {
                    stdout: true
                },
                command: './node_modules/component/bin/component install -d'
            },
            dist: {
                options: {
                    stdout: false
                },
                command: './node_modules/component/bin/component install'
            }
        },
        componentbuild: {
            build: component,
            dist: dist
        },
        watch: {
            scripts: {
                files: [
                    '**/*.js',
                    '**/*.hbs',
                    '**/*.sass',
                    '**/*.scss',
                    '!build/build.js',
                    '!GruntFile.js'
                ],
                tasks: [ 'componentbuild:build' ]
            }
        }
    });

    grunt.registerTask('default', [
        'shell:dev',
        'componentbuild:build'
    ]);

    // TODO:switch to dist task for templates if any
    grunt.registerTask('dist', [
        'clean',
        'shell:dist',
        'componentbuild:dist'
    ]);
};
