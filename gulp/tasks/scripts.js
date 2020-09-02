const gulp = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const wpstream = require('webpack-stream');
const webpack = require('webpack');

const config = require("../config");

module.exports = function script() {
  return gulp
    .src(config.path.srcScripts)
    .pipe(plumber())
		.pipe(wpstream({
      output: {
        filename: 'main.js',
			},
			module: {
				rules: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						use: {
							loader: `babel-loader`,
						},
					}
				]
			},
			mode: config.isDevMode ? 'development' : 'production',
			devtool: config.isDevMode ? 'eval-source-map' : 'none',
			plugins: [
				new webpack.ProvidePlugin({
					$: 'jquery',
					jQuery: 'jquery',
					'window.jQuery': 'jquery',
				}),
			]
    }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(config.path.buildScripts));
};
