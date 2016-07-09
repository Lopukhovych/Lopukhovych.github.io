' use strict'

const gulp = require('gulp');
const sourcemaps =  require('gulp-sourcemaps');
const concat =  require('gulp-concat');
const uglify =  require('gulp-uglify');
const cssmin =  require('gulp-cssmin');
const debug =  require('gulp-debug');
const del =  require('del');

gulp.task('jsmin', function(){
	return gulp.src('./js/src/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(debug({title:'concat:'}))
		.pipe(concat('main.js'))
		.pipe(debug({title:'uglify'}))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('js/dest'));
});

gulp.task('cssmin', function(){
	return gulp.src('./css/src/**/*.css')
		.pipe(sourcemaps.init())
		.pipe(concat('main.css'))
		.pipe(cssmin())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('css/dest'))
});
gulp.task('clean',function(){
	return del(['./js/dest','./css/dest'])
})

gulp.task('default',['clean','jsmin','cssmin']);