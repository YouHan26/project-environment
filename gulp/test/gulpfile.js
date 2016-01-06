/* global __filename */
/* global __dirname */
var gulp = require('gulp');
var Server = require('karma').Server;
var jshint = require("gulp-jshint"); //for the style check

var config = require('../../config.js')();

/**
 * Run test once and exit
 */
// gulp.task('test', function (done) {
//     console.log(done + '-----------------');
//     new Server({
//         configFile: __dirname + '/karma.conf.js',
//     }, done).start();
// });

gulp.task('test', function (done) {
    Server.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function () {
        done();
    });
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    Server.start({
        configFile: __dirname + '/karma.conf.js'
    }, function () {
        done();
    });
});


gulp.task('styleCheck', function () {
    gulp.src([config.base_path + 'scripts/**/*.js'])
        .pipe(jshint())
    //.pipe(jshint.reporter('gulp-jshint-jenkins-reporter'))
        .pipe(jshint.reporter('gulp-jshint-html-reporter', {
            filename: config.styleCheck_filename
        }))
        .pipe(jshint.reporter('jshint-stylish')); // 输出检查结果
});
