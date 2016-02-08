/*
 * grunt-angular-json
 * https://github.com/kenborge/grunt-angular-json
 *
 * Copyright (c) 2015 Ken Børge Viktil
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        angular_json: {
            default_options: {
                options: {},
                files: {
                    'tmp/default_options.js': ['test/fixtures/first.json', 'test/fixtures/second.json']
                }
            },
            option_module: {
                options: {
                    module: 'customModule'
                },
                files: {
                    'tmp/option_module.js': ['test/fixtures/first.json', 'test/fixtures/second.json']
                }
            },
            option_indent: {
                options: {
                    indent: '  ',
                },
                files: {
                    'tmp/option_indent.js': ['test/fixtures/first.json', 'test/fixtures/second.json']
                }
            },
            option_merge: {
                options: {
                    merge: true,
                },
                files: {
                    'tmp/option_merge.js': ['test/fixtures/merge1.json', 'test/fixtures/merge2.json']
                }
            },
            option_merge_one_file: {
                options: {
                    merge: true,
                },
                files: {
                    'tmp/option_merge_one_file.js': ['test/fixtures/merge1.json']
                }
            },
            option_generatename: {
                options: {
                    generateName: function(fileName, path) {
                        switch (fileName) {
                            case 'first':
                                return 'customName1';
                            case 'second':
                                return 'customName2';
                        }
                        return 'undefined';
                    }
                },
                files: {
                    'tmp/option_generatename.js': ['test/fixtures/first.json', 'test/fixtures/second.json']
                }
            },

            option_generatename_merge: {
                options: {
                    generateName: function(fileName, path) {
                        if (fileName === 'option_generatename_merge') {
                            return 'customName';
                        }
                        return 'undefined';
                    },
                    merge: true
                },
                files: {
                    'tmp/option_generatename_merge.js': ['test/fixtures/merge1.json', 'test/fixtures/merge2.json']
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'angular_json', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
