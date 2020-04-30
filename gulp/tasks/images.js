const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const svgSprite = require("gulp-svg-sprite");
const svgmin = require("gulp-svgmin");
const config = require('../config');

module.exports.images = function images() {
  return gulp
    .src(config.path.srcImg)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({
          quality: 75,
          progressive: true,
        }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest(config.path.buildImg));
};

module.exports.sprite = function sprite() {
  return gulp
    .src(config.path.srcSprite)
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg", //sprite file name
          },
        },
        shape: {
          id: {
            separator: "--",
          },
        },
      })
    )
    .pipe(gulp.dest(config.path.buildSprite));
};
