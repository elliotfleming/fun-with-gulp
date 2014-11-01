var gulp  = require('gulp');
var config= require('../config');

gulp.task('watch', function() {
  gulp.watch(config.assets.src, ['assets']);
  gulp.watch(config.stylus.src, ['stylus']);
  gulp.watch(config.bower.styles.src, ['bower:styles']);
});