'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const browserSync = require('browser-sync').create();
const sequence = require('gulp-sequence');

gulp.task('sass', () => {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('sass:lint', () => {
  return gulp.src('./src/styles/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('cp', () => {
  return gulp.src('./src/index.html')
   .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', () => {
  gulp.watch(['./src/styles/*.scss'], ['sass:lint', 'sass', 'cp']);
  gulp.watch('./src/styles/*.scss').on('change', () => {
    setTimeout(browserSync.reload, 500);
  });
});

gulp.task('serve', function() {
  browserSync.init({
    server: './dist/'
  });
});

gulp.task('default', sequence(['serve', 'watch']));
