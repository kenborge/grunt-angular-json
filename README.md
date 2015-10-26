# grunt-angular-json

> Merge and convert JSON files into angular modules

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-angular-json --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-angular-json');
```

## Expample

### Input

```JSON
//first.json
{
    "field1": "value1",
    "field2": true,
    "field-3": 10
}
```
```JSON
//second.json
{
    "field1": "value2"
}
```

### Output
```js
angular.module('angular_json', []).value('first', {
    field1: 'value1',
    field2: true,
    'field-3': 10
}).value('second', {
    field1: 'value2'
});
```

## The "angular_json" task

### Overview
In your project's Gruntfile, add a section named `angular_json` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  angular_json: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.indent
Type: `Number`
Default value: `'    '`

What characters to use as indentation in the generated javascript files, default 4 spaces.

#### options.module
Type: `String`
Default value: `'angular_json'`

A string value that will be used as the name for the angular module generated.

#### options.module
Type: `Boolean`
Default value: `'false'`

A boolean value indicating if the task should merge the json objects when multiple source files
are provided for the same destination.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  angular_json: {
    options: {
        indent: '  ',
        module: 'myModule',
        merge: true
    },
    files: {
      'dest/out.js': ['src/in1.json', 'src/in2.js'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
