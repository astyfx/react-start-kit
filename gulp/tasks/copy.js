// @file copy.js
var gulp = require('gulp');
var config = require('../config').copy;

gulp.task('copy-html', function () {
  gulp.src(config.html.src)
      .pipe(gulp.dest(config.html.dest));
});

gulp.task('copy-fonts', function () {
  gulp.src(config.fonts.src)
      .pipe(gulp.dest(config.fonts.dest));
});

gulp.task('copy', ['copy-html', 'copy-fonts']);