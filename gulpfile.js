const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

config = {
  mode: {
    symbol: true
  }
};

gulp.task('icons', function(done) {
  gulp.src('**/*.svg', { cwd: './src' })
    .pipe(svgSprite(config))
    .pipe(gulp.dest('.'));
    done();
});
