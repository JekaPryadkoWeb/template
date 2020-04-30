const gulp = require("gulp")

const serve = require("./gulp/tasks/serve")
const { html, pages } = require("./gulp/tasks/html")
const { images, sprite } = require("./gulp/tasks/images")
const scripts = require("./gulp/tasks/scripts")
const styles = require("./gulp/tasks/styles")
const clean = require("./gulp/tasks/clean")
const { libs, ajax, htaccess, fonts } = require("./gulp/tasks/static")

const config = require("./gulp/config")

function setMode(isProduction = false) {
  return (cb) => {
    process.env.NODE_ENV = isProduction ? "production" : "development"
    config.isDevMode = isProduction ? false : true
    cb()
  }
}

const dev = gulp.parallel(
  fonts,
  html,
  pages,
  images,
  sprite,
  scripts,
  styles,
  libs,
  ajax,
  htaccess
)
const build = gulp.series(clean, dev)

module.exports.start = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)
