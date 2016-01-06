/* global __dirname */
module.exports = function () {
    console.log('config file read start****************');
    /**
     * test config start
     */
    this.base_path = __dirname + '../src/main/webapp/';
    this.coverageFilePath = 'scripts/**/*.js';
    this.test_framework = ['jasmine'];
    this.test_file = [
        'common/angularjs/angular.js',
        'common/angularjs/angular-mocks.js',
        'common/angularjs/angular-route.min.js',
        'common/angularjs/angular-resource.min.js',
        'common/angularjs/angular-locale_zh-cn.js',
        'common/angularjs/angular-animate.min.js',
        'scripts/utils/**/*.js',
        'scripts/public/**/*.js',
    //TODO change module file here
        'scripts/account/*.js',
    // app-api
        'scripts/app.js',
        'scripts/app-api.js',
    //TDOO change test file path here
        'tests/**/*.js',
    ];
    this.exclude_file = [
        //TODO add exclude file here
    ];
    this.coverageReporter = {
        type: 'html',
        //TDOO need to change this file path here
        dir: __dirname + '/test-report',
        // dir: '/data/software/tomcat/apache-tomcat-7.0.61/webapps/mallappss-uac/',
        subdir: function () {
            // return browser.toLowerCase().split(/[ /-]/)[0];
            return 'karma-coverage-report';
        }
    };
    this.port = 9876;

    
    /**
     * test config end
     */

    this.styleCheck_filename = __dirname + '/style-check/index.html';


    return this;

};