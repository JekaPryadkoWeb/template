const gulp = require('gulp')
const plumber = require('gulp-plumber')
const rigger = require('gulp-rigger')
const htmlValidator = require('gulp-w3c-html-validator')
const config = require('../config');

module.exports.html = function html(){
	return gulp.src(config.path.srcHtml)
	.pipe(plumber())
	.pipe(rigger())
	.pipe(htmlValidator())
	.pipe(gulp.dest(config.path.buildHtml))
}

module.exports.pages = function pages(){
	return gulp.src(config.path.srcPages)
	.pipe(plumber())
	.pipe(rigger())
	.pipe(htmlValidator())
	.pipe(gulp.dest(config.path.buildPages))
}
