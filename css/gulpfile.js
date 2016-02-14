var gulp         = require('gulp');
var sass         = require('gulp-sass');
var stylus       = require('gulp-stylus');
var svgSprite    = require('gulp-svg-sprite');

//// ### SCG Sprite
gulp.task('sprite', function() {
  var config = {
    mode: {
      css: {     // Activate the «css» mode
          bust : false,
          sprite: '../sprite/svg-sprite.svg',
          render : {
              styl: {dest: '_svg-sprite.styl'},
              scss: {dest: '_svg-sprite.scss'},
              css: {dest: 'svg-sprite.css'}
          }
      }
    }
  };
  gulp.src('./icons/*.svg')
      .pipe(svgSprite(config))
      .pipe(gulp.dest('./'));
});

//// ### RUN DEFAULT GULP
gulp.task('default', function() {
  gulp.start('sprite');
});
