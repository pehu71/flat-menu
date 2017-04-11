// https://www.npmjs.com/package/gulp-sass

'use strict';
var del = require('del');
var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var purify = require('gulp-purifycss');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('flat-menu/tmp.css'))
        .pipe(gulp.dest('app/css/dist'));
});

gulp.task('beautify', ['sass'], function () {
    gulp.src('app/css/dist/flat-menu/tmp.css')
        .pipe(purify(['app/**/*.js', 'app/tpl/*.html']))
        .pipe(cleanCss())
        .pipe(rename('base.css'))
        .pipe(gulp.dest('app/css/dist'));
});

gulp.task('sass:watch', function () {
    gulp.watch('app/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'beautify']);