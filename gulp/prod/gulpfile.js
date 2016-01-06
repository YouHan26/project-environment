var gulp = require('gulp');

//base path is src/main/webapp

// 引入组件
var uglify = require('gulp-uglify'),        // js压缩
    concat = require('gulp-concat'),        // 合并文件
    rename = require('gulp-rename'),        // 重命名
    clean = require('gulp-clean'),          //清空文件夹
    inject = require('gulp-inject'),        //inject for html
    debug = require('gulp-debug'),          //debug
    jshint = require("gulp-jshint");

// 合并，压缩js文件
gulp.task('javascripts', function () {
    gulp.src(['./scripts/*.js', './scripts/**/*.js'])
        .pipe(concat('all.js', {newLine: ';'}))
        .pipe(gulp.dest('./build/scripts/develop'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts/prod'));
});


gulp.task('build-html', ['javascripts'], function () {
    gulp.src('./WEB-INF/views/index.html')
        .pipe(inject(gulp.src('./build/scripts/prod/*.js', {read: false}), {addRootSlash: false}))
        .pipe(gulp.dest('./WEB-INF/views', {base: ''}));
});

gulp.task('build-html-develop', ['javascripts'], function () {
    gulp.src('./WEB-INF/views/index.html')
        .pipe(inject(gulp.src('./build/scripts/develop/*.js', {read: false}), {addRootSlash: false}))
        .pipe(gulp.dest('./WEB-INF/views'));
});


// 清空图片、样式、js
gulp.task('clean', function () {
    // return gulp.src(['./javis/static/build/css/all.css','./javis/static/build/css/all.min.css'], {read: false})
    //   .pipe(clean({force: true}));
    return;
});

// 将bower的库文件对应到指定位置
gulp.task('buildlib', function () {

    // gulp.src('./bower_components/angular/angular.min.js')
    //     .pipe(gulp.dest('./javis/static/build/js/'))

    // gulp.src('./bower_components/angular/angular.js')
    //     .pipe(gulp.dest('./javis/static/build/js/'))

    // gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
    //     .pipe(gulp.dest('./javis/static/build/js/'))

    // gulp.src('./bower_components/jquery/dist/jquery.min.js')
    //     .pipe(gulp.dest('./javis/static/build/js/'))

    // gulp.src('./bower_components/angular-route/angular-route.min.js')
    //     .pipe(gulp.dest('./javis/static/build/js/'))

    // gulp.src('./bower_components/angular-animate/angular-animate.min.js')
    //     .pipe(gulp.dest('./javis/static/build/js/'))

    // gulp.src('./bower_components/angular-bootstrap/ui-bootstrap.min.js')
    //     .pipe(gulp.dest('./javis/static/build/js/'))

    // gulp.src('./bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js')
    //     .pipe(gulp.dest('./javis/static/build/js/'))

    // //--------------------------css-------------------------------------

    // gulp.src('./bower_components/bootstrap/fonts/*')
    //     .pipe(gulp.dest('./javis/static/build/css/fonts/'))

    // gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
    //     .pipe(gulp.dest('./javis/static/build/css/lib'))

});

// 定义develop任务在日常开发中使用
gulp.task('develop', ['buildlib', 'javascripts', 'build-html-develop'], function () {
    // gulp.watch('./javis/static/less/*.less', ['build-less']);
});


// 定义一个prod任务作为发布或者运行时使用
gulp.task('prod', ['buildlib', 'javascripts', 'build-html'], function () {

    // 监听.less文件,一旦有变化,立刻调用build-less任务执行
    // gulp.watch('./javis/static/less/*.less', ['build-less']);
});

// gulp命令默认启动的就是default认为,这里将clean任务作为依赖,也就是先执行一次clean任务,流程再继续.
gulp.task('default', ['clean'], function () {
    gulp.run('prod');
});

//s
gulp.task('check', function () {
    gulp.src(['../src/main/webapp/scripts/*.js', '../src/main/webapp/scripts/**/*.js'])
        .pipe(jshint())
        //.pipe(jshint.reporter('gulp-jshint-jenkins-reporter'))
        .pipe(jshint.reporter('gulp-jshint-html-reporter', {
            filename: '/data/software/tomcat/apache-tomcat-7.0.61/webapps/mallappss-uac/jshint-report.html'
            //filename: '../src/main/webapp/jshint-report.html'
        }))
        .pipe(jshint.reporter('jshint-stylish')); // 输出检查结果
});


gulp.task('test', function(){
    
});