// @file webpack.js 
var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var webpack = require('webpack-stream');
var config = require('../config');

// task name is the same as the file name in advance and outlook is good
gulp.task('webpack', function () {
  gulp.src(config.webpack.entry)
      .pipe(webpack(config.webpack))
      .pipe(gulpif(config.js.uglify, uglify()))
      .pipe(gulp.dest(config.dest));
});