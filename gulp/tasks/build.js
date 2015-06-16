// @file build.js
var gulp = require('gulp');
var rimraf = require('rimraf');

gulp.task('clean', function (cb) {
  rimraf('./build/', cb);
});

gulp.task('build-all', ['webpack', 'sass', 'copy'])

gulp.task('build', ['clean', 'build-all']);