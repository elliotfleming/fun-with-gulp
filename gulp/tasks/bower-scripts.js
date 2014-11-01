var gulp = require('gulp');
var changed = require('gulp-changed');
var gconcat = require('gulp-concat');
var filter = require('gulp-filter');
var bowerFiles = require('main-bower-files');
var streamFiles = require('stream-files');
var scripts = require('../config').bower.scripts;

gulp.task('bower:scripts', function() {
  return gulp.src(bowerFiles())
    .pipe(filter('**/*.js'))
    .pipe(gconcat('vendor.js'))
    .pipe(
      changed(
        scripts.dest,
        { hasChanged: changed.compareSha1Digest }
      )
    )
    .pipe(streamFiles())
    .pipe(gulp.dest(scripts.dest));
});