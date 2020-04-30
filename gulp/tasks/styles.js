const gulp = require("gulp");
const plumber = require("gulp-plumber");
const gulpIf = require("gulp-if");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const gcmq = require("gulp-group-css-media-queries");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");

const config = require("../config");

module.exports = function styles() {
  return gulp
    .src(config.path.srcStyles)
    .pipe(plumber())
    .pipe(gulpIf(config.isDevMode, sourcemaps.init()))
    .pipe(sass())
    .pipe(gcmq())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(shorthand())
    .pipe(
      cleanCSS({
        debug: true,
        compatibility: "*",
      })
    )
    .pipe(gulpIf(config.isDevMode, sourcemaps.write()))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(config.path.buildStyles));
};
