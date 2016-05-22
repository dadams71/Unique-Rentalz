/// <binding ProjectOpened='default' />
"use strict";

////////////////////////////////////////////////////////
//Require
////////////////////////////////////////////////////////
var input = 'app/sass/**/*.scss';
var output = 'app/css';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

////////////////////////////////////////////////////////
//Browser sync tasks
////////////////////////////////////////////////////////

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
            port: 8080

    });
});

////////////////////////////////////////////////////////
//SCSS tasks
////////////////////////////////////////////////////////


gulp.task('sass', function () {
    gulp.src(input)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('../css/maps'))
        .pipe(gulp.dest(output))
        .pipe(browserSync.stream());

});

////////////////////////////////////////////////////////
//html tasks
////////////////////////////////////////////////////////

gulp.task('html', function () {
    gulp.src('app/**/*.html')
        .pipe(browserSync.stream());
});

////////////////////////////////////////////////////////
//Watch tasks
////////////////////////////////////////////////////////

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/**/*.html', ['html']);
});

////////////////////////////////////////////////////////
//Default tasks
////////////////////////////////////////////////////////

gulp.task('default', ['browser-sync', 'watch']);
