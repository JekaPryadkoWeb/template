const gulp = require("gulp")
const plumber = require("gulp-plumber")
const rename = require("gulp-rename")
const wpstream = require("webpack-stream")
const webpack = require("webpack")
const path = require("path")
const glob = require("glob")

const config = require("../config")

module.exports = function script() {
  return gulp
    .src(config.path.srcScripts)
    .pipe(plumber())
    .pipe(
      wpstream({
        entry: toObject(glob.sync(config.path.srcScripts)),
        output: {
          filename: "[name].js",
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: `babel-loader`,
              },
            },
          ],
        },
        mode: config.isDevMode ? "development" : "production",
        devtool: config.isDevMode ? "eval-source-map" : "none",
        plugins: [
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
          }),
        ],
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(config.path.buildScripts))
}

function toObject(paths) {
  const entry = {}
  paths.forEach(function (p) {
    const name = path.basename(p, ".js")
    entry[name] = p
  })
  return entry
}
