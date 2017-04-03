'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const sass = require('gulp-sass');
const del = require('del');
const csscomb = require('gulp-csscomb');

gulp.task('sass',function(){
  return gulp.src(['source/css/style.scss'])
    .pipe(debug({title: 'src:'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(csscomb())
    .pipe(gulp.dest('public/css'));
});

gulp.task('clean',function(){
  return del('public');
});

gulp.task('default', ['sass']);
gulp.watch('source/css/*.scss', ['sass']);