var gulp = require('gulp');
var jshint = require('gulp-jshint');
var minifyHTML = require('gulp-minify-html');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var buffer = require('vinyl-buffer');


// JavaScript hinting task
gulp.task('jshint', function() {
  return gulp.src('js/systems/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Minify index
gulp.task('html', function() {
  gulp.src('index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));
});

// JavaScript build task, removes whitespace and concatenates all files
gulp.task('scripts', function() {
  return browserify('js/main.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch('js/systems/*.js', ['jshint']);
});

// Default task
gulp.task('default', ['jshint', 'watch']);

// Build task
gulp.task('build', ['jshint', 'html', 'scripts']);