const gulp = require('gulp')
const config = require('../config');

module.exports.static = function static() {
  return gulp.src(config.path.srcStatic)
    .pipe(gulp.dest(config.path.buildStatic))
}

module.exports.htaccess = function htaccess() {
  return gulp.src(config.path.srcHtaccess)
    .pipe(gulp.dest(config.path.buildHtaccess))
}
module.exports.fonts = function fonts() {
  return gulp.src(config.path.srcFonts)
    .pipe(gulp.dest(config.path.buildFonts))
}


