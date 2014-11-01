var gulp = require('gulp');
var changed = require('gulp-changed');
var streamFiles = require('stream-files');
var assets = require('../config').assets

gulp.task('assets', function() {
  return gulp.src(assets.src)
    .pipe(
      changed(
        assets.dest,
        { hasChanged: changed.compareSha1Digest }
      )
    )
    .pipe(streamFiles())
    .pipe(gulp.dest(assets.dest));
});