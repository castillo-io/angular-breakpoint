var gulp = require('gulp');
var connect = require('gulp-connect');
var karma = require('gulp-karma');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

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

/**
 * @ngdoc object
 * @name gulpTasks.test
 * @description
 * Runs unit tests
 * {@link https://github.com/lazd/gulp-karma gulp-karma }
 */
gulp.task('test', function () {
  //Use a fake src to run the tests specified in the karma config file
  return gulp.src('./unit')
    .pipe(karma({
      configFile: 'test/karma.conf.js',
      action: 'run',
      singleRun: true
    }))
    .on('error', function (err) {
      console.log(err);
      this.emit('end');
    });
});

/**
 * @ngdoc object
 * @name gulpTasks.build
 * @description
 * Annotate and uglify the source code
 * {@link https://www.npmjs.com/package/gulp-ng-annoatate }
 * {@link https://www.npmjs.com/package/gulp-uglify }
 */
gulp.task('build', function() {
  return gulp.src('src/*.js')
    .pipe(ngAnnotate())
    .pipe(uglify({
      preserveComments: 'license'
    }))
    .pipe(gulp.dest('dist'));
});