var gulp = require('gulp');
var changed = require('gulp-changed');
var gconcat = require('gulp-concat');
var stylus = require('gulp-stylus');
var nib = require('nib');
var streamFiles = require('stream-files');
var styl = require('../config').stylus;

gulp.task('stylus', function() {
  return gulp.src(styl.src)
    .pipe(stylus({ use: nib() }))
    .pipe(gconcat('app.css'))
    .pipe(
      changed(
        styl.dest,
        { hasChanged: changed.compareSha1Digest }
      )
    )
    .pipe(streamFiles())
    .pipe(gulp.dest(styl.dest));
});