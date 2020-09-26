const gulp = require("gulp");

const { html, pages } = require("./html");
const { images, sprite, webp } = require("./images");
const scripts = require("./scripts");
const styles = require("./styles");
const { static, htaccess, fonts } = require("./static");
const config = require("../config");

const server = require("browser-sync").create();

function readyReload(cb) {
  server.reload();
  cb();
}

module.exports = function serve(cb) {
  server.init({
    server: config.path.serve,
    notify: false,
    open: true,
    cors: true,
  });

  gulp.watch(config.path.watchHtml, gulp.series(html, readyReload));
  gulp.watch(config.path.watchPages, gulp.series(pages, readyReload));
	gulp.watch(config.path.watchStyles, gulp.series(styles, readyReload));
  gulp.watch(config.path.watchScripts, gulp.series(scripts, readyReload));
  gulp.watch(config.path.watchImg, gulp.series(images, readyReload));
  gulp.watch(config.path.watchImg, gulp.series(webp, readyReload));
  gulp.watch(config.path.watchSprite, gulp.series(sprite, readyReload));
	gulp.watch(config.path.watchFonts, gulp.series(fonts, readyReload));
  gulp.watch(config.path.watchStatic, gulp.series(static, readyReload));
  gulp.watch(config.path.watchHtaccess, gulp.series(htaccess, readyReload));

  return cb();
};
