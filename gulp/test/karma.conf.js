/* global __dirname */
/* global __filename */
// Karma configuration
// Generated on Wed Jul 15 2015 15:39:36 GMT+0800

var fileConfig = require('../../config.js')();

console.log('start test karma conf file****************');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files,
        // exclude)
        basePath: fileConfig.base_path,

        coverageFilePath: fileConfig.coverageFilePath,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: fileConfig.test_framework,

        // list of files / patterns to load in the browser
        files: fileConfig.test_file,

        // list of files to exclude
        exclude: fileConfig.exclude_file,

        reporters: ['progress', 'coverage'],

        preprocessors: {
            'scripts/*.js': ['coverage'],
            'scripts/**/*.js': ['coverage']
        },

        coverageReporter: fileConfig.coverageReporter,

        // web server port
        port: fileConfig.port,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file
        // changes
        // autoWatch: true,

        // start these browsers
        // available browser launchers:
        // https://npmjs.org/browse/keyword/karma-launcher
        // browsers: ['PhantomJS'],
        // browsers: ['Firefox'],
        
        // browsers: ['PhantomJS', 'PhantomJS_custom'],
        browsers: ['PhantomJS'],
        // browsers: ['Chrome'],
 
        // you can define custom flags 
        // customLaunchers: {
        //     'PhantomJS_custom': {
        //         base: 'PhantomJS',
        //         options: {
        //             windowName: 'my-window',
        //             settings: {
        //                 webSecurityEnabled: false
        //             },
        //         },
        //         flags: ['--load-images=true'],
        //         debug: true
        //     }
        // },

        // phantomjsLauncher: {
        //     // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
        //     exitOnResourceError: true
        // }
        
        
        
        //      browsers: ['Chrome', 'PhantomJS'],

        // browsers: ['Chrome', 'Chrome_without_security'],
        // browsers: ['Chrome_without_security'],

        // you can define custom flags
        // customLaunchers : {
        //     Chrome_without_security : {
        //         base : 'Chrome',
        //         flags : ['--disable-web-security']
        //     }
        // },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    })
};
