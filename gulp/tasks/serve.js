const gulp = require("gulp");

const { html, pages } = require("./html");
const { images, sprite } = require("./images");
const scripts = require("./scripts");
const styles = require("./styles");
const { libs, ajax, htaccess, fonts } = require("./static");
const config = require("../config");

const server = require("browser-sync").create();

function readyReload(cb) {
  server.reload();
  cb();
}

module.exports = function serve(cb) {
  server.init({
    server: "build",
    notify: false,
    open: true,
    cors: true,
  });

  gulp.watch(config.path.srcFonts, gulp.series(fonts, readyReload));
  gulp.watch(config.path.srcHtml, gulp.series(html, readyReload));
  gulp.watch(config.path.srcPages, gulp.series(pages, readyReload));
  gulp.watch(config.path.srcImg, gulp.series(images, readyReload));
  gulp.watch(config.path.srcScripts, gulp.series(scripts, readyReload));
  gulp.watch(config.path.srcSprite, gulp.series(sprite, readyReload));
  gulp.watch(
    config.path.srcStyles,
    gulp.series(styles, (cb) =>
      gulp.src(config.path.buildStyles).pipe(server.stream()).on("end", cb)
    )
  );
  gulp.watch(config.path.srcLibs, gulp.series(libs, readyReload));
  gulp.watch(config.path.srcAjax, gulp.series(ajax, readyReload));
  gulp.watch(config.path.srcHtaccess, gulp.series(htaccess, readyReload));

  return cb();
};
