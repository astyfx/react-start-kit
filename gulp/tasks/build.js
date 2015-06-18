// @file build.js
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function (cb) {
  del([
      './build'
  ], cb);
});

gulp.task('build', ['webpack', 'sass', 'copy']);