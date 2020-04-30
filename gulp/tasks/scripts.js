const gulp = require("gulp");
const plumber = require("gulp-plumber");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const rigger = require("gulp-rigger");
const gulpIf = require("gulp-if");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

const config = require("../config");

module.exports = function script() {
  return gulp
    .src(config.path.srcScripts)
    .pipe(plumber())
    .pipe(gulpIf(config.isDevMode, sourcemaps.init()))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(rigger())
    .pipe(uglify())
    .pipe(gulpIf(config.isDevMode, sourcemaps.write()))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(config.path.buildScripts));
};
