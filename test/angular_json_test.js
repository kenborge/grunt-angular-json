'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.angular_json = {
    setUp: function(done) {
        // setup here if necessary
        done();
    },
    default_options: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/default_options.js');
        var expected = grunt.file.read('test/expected/default_options');
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    },
    option_module: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/option_module.js');
        var expected = grunt.file.read('test/expected/option_module');
        test.equal(actual, expected, 'default options did not generate correct output.');

        test.done();
    },
    option_indent: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/option_indent.js');
        var expected = grunt.file.read('test/expected/option_indent');
        test.equal(actual, expected, 'indent option did not generate correct output.');

        test.done();
    },
    option_merge: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/option_merge.js');
        var expected = grunt.file.read('test/expected/option_merge');
        test.equal(actual, expected, 'merge option did not generate correct output.');

        test.done();
    },
    option_generatename: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/option_generatename.js');
        var expected = grunt.file.read('test/expected/option_generatename');
        test.equal(actual, expected, 'generateName option did not generate correct output.');

        test.done();
    },
    option_generatename_merge: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/option_generatename_merge.js');
        var expected = grunt.file.read('test/expected/option_generatename_merge');
        test.equal(actual, expected, 'generateName option with merge option did not generate correct output.');

        test.done();
    }
};
