// @file watch.js
var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config').watch;

gulp.task('watch', function() {
  // js
  watch(config.js, function() {
    gulp.start(['webpack']);
  });
  // sass
  watch(config.sass, function() {
    gulp.start(['sass']);
  });
  // html
  watch(config.html, function() {
    gulp.start(['copy']);
  });
});