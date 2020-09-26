const util = require('gulp-util');

module.exports = {
	isProdMode: util.env.production,
	isDevMode: !util.env.production,
	path: {
    srcHtml: 'src/*.html',
    watchHtml: 'src/*.html',
    buildHtml: 'build',

		srcPages: 'src/html/*.html',
		watchPages: 'src/html/**/*.html',
    buildPages: 'build/pages',

		srcStyles: 'src/scss/*.scss',
		watchStyles: 'src/scss/**/*.scss',
    buildStyles: 'build/assets/css',

		srcScripts: './src/js/*.js',
		watchScripts: 'src/js/**/*.js',
		buildScripts: 'build/assets/js',

		srcImg: 'src/img/**/*.{gif,png,jpg,svg,webp}',
		watchImg: 'src/img/**/*.{gif,png,jpg,svg,webp}',
    buildImg: 'build/assets/img',

		srcSprite: 'src/img/svg/icons/**/*.svg',
		watchSprite: 'src/img/svg/icons/**/*.svg',
    buildSprite: 'build/assets/img/svg/',

		srcStatic: 'src/static/**/*',
		watchStatic: 'src/static/**/*',
    buildStatic: 'build/assets/',

		srcHtaccess: 'src/.htaccess',
		watchHtaccess: 'src/.htaccess',
    buildHtaccess: 'build',

		srcFonts: 'src/fonts/**/*',
		watchFonts: 'src/fonts/**/*',
    buildFonts: 'build/assets/fonts',

    serve: 'build',
    clean: 'build',
  }
};
