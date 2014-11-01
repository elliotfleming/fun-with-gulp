var gulp = require('gulp');
var del = require('del');
var build = require('../config').build;

gulp.task('clean', function(next) {
  del([build.dest], next());
});