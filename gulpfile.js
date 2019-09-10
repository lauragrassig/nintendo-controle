"use strict"

const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("default", watch);
gulp.task("sass", sassCompila);

function sassCompila() {
  return gulp
  .src("src/scss/**/*.scss")
  .pipe(
    sass(
      { outputStyle: 'compressed' }
    ).on("error", sass.logError)
  )
  .pipe(gulp.dest("src/css"));
}

function watch (){
  gulp.watch("src/scss/**/*.scss", sassCompila);
}