var gulp   = require('gulp'),
    rollup = require('./index');

gulp.task('test', function(){
  gulp.src('test/src.js', {read: false})
  	.pipe(rollup())
  	.pipe(gulp.dest('test/dest'));
});
