const gulp = require('gulp')
const config = require('../config');

module.exports.libs = function libs() {
  return gulp.src(config.path.srcLibs)
    .pipe(gulp.dest(config.path.buildLibs))
}
module.exports.ajax = function ajax() {
  return gulp.src(config.path.srcAjax)
    .pipe(gulp.dest(config.path.buildAjax))
}
module.exports.htaccess = function htaccess() {
  return gulp.src(config.path.srcHtaccess)
    .pipe(gulp.dest(config.path.buildHtaccess))
}
module.exports.fonts = function fonts() {
  return gulp.src(config.path.srcFonts)
    .pipe(gulp.dest(config.path.buildFonts))
}


