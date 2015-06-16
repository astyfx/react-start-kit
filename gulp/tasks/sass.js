// @file sass.js
var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var config = require('../config').sass;

gulp.task('sass', function () {
  sass(config.src, {style: 'expanded'}) // compile sass
      .pipe(plumber()) // proceed when error
      .pipe(concat(config.output))  // merge to one file
      .pipe(autoprefixer(config.autoprefixer)) // vender-prefix
      .pipe(gulpif(config.minify, minify())) // if needed minify
      .pipe(gulp.dest(config.dest)); // output
});