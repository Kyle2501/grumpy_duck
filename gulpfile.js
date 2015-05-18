var gulp = require('gulp');
var jshint = require('gulp-jshint');
var minifyHTML = require('gulp-minify-html');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var minifyCSS = require('gulp-minify-css');

// JavaScript hinting task
gulp.task('jshint', function() {
  return gulp.src('site/js/systems/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Minify index
gulp.task('html', function() {
  gulp.src('site/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));
});

// Minify CSS
gulp.task('css', function() {
  return gulp.src('site/css/main.css')
  .pipe(concat('site.css'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('build/css'))
})

// JavaScript build task, removes whitespace and concatenates all files
gulp.task('scripts', function() {
  return browserify('site/js/main.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch(['site/js/**/**/*.js', 'site/js/**/*.js', 'site/js/*.js'], ['jshint']);
  gulp.watch(['site/js/**/**/*.js', 'site/js/**/*.js', 'site/js/*.js'], ['scripts']);
  gulp.watch('site/*.html', ['html']);
  gulp.watch('site/css/*.css', ['css']);
});

// Default task
gulp.task('default', ['jshint', 'watch', 'html', 'scripts', 'css']);




