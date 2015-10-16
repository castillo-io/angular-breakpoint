
var gulp = require('gulp');
var connect = require('gulp-connect');

/**
 * @ngdoc object
 * @name gulpTasks.demo
 * @description
 * Runs a webserver (with LiveReload)
 * Serves the demo
 * {@link https://github.com/avevlad/gulp-connect gulp-connect}
 */
gulp.task('demo', function () {
    connect.server({
        root: '.',
        port: 9000,
        livereload: true
    });
});

/**
 * @ngdoc object
 * @name gulpTasks.watch
 * @description
 * Reloads demo
 * Uses:
 * {@link https://github.com/avevlad/gulp-connect gulp-connect}
 */
gulp.task('watch', function () {
    gulp.src('demo/*')
        .pipe(connect.reload());
});

/**
 * @ngdoc object
 * @name gulpTasks.default
 */
gulp.task('default', [
    'demo'
]);