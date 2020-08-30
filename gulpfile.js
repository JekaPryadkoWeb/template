const gulp = require("gulp")

const serve = require("./gulp/tasks/serve")
const { html, pages } = require("./gulp/tasks/html")
const { images, sprite, webp } = require("./gulp/tasks/images")
const scripts = require("./gulp/tasks/scripts")
const styles = require("./gulp/tasks/styles")
const clean = require("./gulp/tasks/clean")
const { static, htaccess, fonts } = require("./gulp/tasks/static")

const config = require("./gulp/config")

const dev = gulp.parallel(
  fonts,
  html,
  pages,
  images,
  sprite,
  webp,
  scripts,
  styles,
  static,
  htaccess
)
const build = gulp.series(clean, dev)

module.exports.dev = gulp.series(build, serve)
module.exports.build = gulp.series(build)

