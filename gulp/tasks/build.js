var gulp = require('gulp');

gulp.task('build', ['assets', 'stylus', 'bower:styles']);