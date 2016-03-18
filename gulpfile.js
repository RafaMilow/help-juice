const gulp  = require('gulp');
const sass  = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var concat = require("gulp-concat");

//app/scss/**/*.scss

gulp.task('default', function () {
    return gulp.src('./css/src/*.css')
        .pipe(uncss({
            html: ['./index.html']
        }))
        .pipe(concat("all.css"))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css/min'))
        .pipe(csso())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest('./css/min'));
});

//gulp.task('default', ['prefix']);