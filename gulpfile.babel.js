'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const browserSync = require('browser-sync').create();
const sequence = require('gulp-sequence');
const browserify = require('gulp-browserify');
const concat = require('gulp-concat');

gulp.task('sass', () => {
  return gulp.src('./src/client/styles/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/client/styles'));
});

gulp.task('sass:lint', () => {
  return gulp.src('./src/client/styles/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('watch', () => {
  gulp.watch([
    './src/**/*.scss',
    './src/server/**/*.js',
    './src/client/js/*.js',
    './src/client/views/*.pug'], ['sass:lint', 'sass', 'js', 'views', 'serverjs']);
});

gulp.task('serverjs', () => {
  gulp.src(['src/server/**/*'])
  .pipe(gulp.dest('dist/server'));
})

gulp.task('views', () => {
  gulp.src(['./src/client/views/*'])
    .pipe(gulp.dest('./dist/client'))
});

gulp.task('js', () => {
  gulp.src('./src/client/**/*.js')
  .pipe(browserify({
    insertGlobals : true,
  }))
  .pipe(concat('user-profile.js'))
  .pipe(gulp.dest('./dist/client/js'))
});

gulp.task('default', sequence(['watch']));
