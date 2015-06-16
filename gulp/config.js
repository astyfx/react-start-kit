// @file config.js
var path = require('path');
var dest = './build'; // ouput destination directory
var src = './src'; // source directory
var relativeSrcPath = path.relative('.', src);

module.exports = {
  dest: dest, // output destination
  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false
  },
  copy: {
    html: {
      src: [
        src + '/html/index.html'
      ],
      dest: dest
    },
    fonts: {
      src: [
        src + '/fonts/**'
      ],
      dest: dest + '/fonts/'
    }
  },
  sass: {
    src: [
      src + '/sass/app.sass'
    ],
    dest: dest + '/css/',
    output: 'app.css', // output filename,
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: false
  },
  watch: {
    js: relativeSrcPath + '/js/**',
    sass: relativeSrcPath + '/sass/**',
    html: relativeSrcPath + '/html/index.html'
  },
  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          loaders: ['babel'],
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
      ]
    },
    resolve: {
      extensions: ['', '.js']
    }
  }
}