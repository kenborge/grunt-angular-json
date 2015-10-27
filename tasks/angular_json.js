/*
 * grunt-angular-json
 * https://github.com/kenborge/grunt-angular-json
 *
 * Copyright (c) 2015 Ken Børge Viktil
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');
var stringifyObject = require('stringify-object');
var extend = require('extend');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('angular_json', 'Merge and convert JSON files into angular modules', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            module: 'angular_json',
            indent: '    ',
            merge: false,
            generateName: function(fileName, fullPath) {
                return fileName;
            }
        });

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                //Read json from file
                return {
                    name: options.generateName(path.basename(filepath, '.json'), filepath),
                    json: grunt.file.readJSON(filepath)
                };
            });

            if (!!options.merge) {
                var args = src.map(function(data) {
                    return data.json;
                });
                src = extend.bind(true).apply(null, args);
                var valueName = options.generateName(path.basename(f.dest, '.js'), f.dest);
                src = valueTemplate(valueName, src);
            } else {
                src = src.map(function(data) {
                    return valueTemplate(data.name, data.json);
                }).join('.');
            }

            var res = [moduleTemplate(options.module), '.', src, ';', grunt.util.linefeed].join('');

            // Write the destination file.
            grunt.file.write(f.dest, res);

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');

            function moduleTemplate(name) {
                return 'angular.module(\'' + name + '\', [])';
            }

            function valueTemplate(name, json) {
                return 'value(\'' + name + '\', ' + objToString(json) + ')';
            }

            function objToString(obj) {
                return stringifyObject(obj, {
                    indent: options.indent
                });
            }
        });
    });
};
