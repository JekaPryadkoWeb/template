const util = require('gulp-util');

module.exports = {
	isProdMode: util.env.production,
	isDevMode: !util.env.production,
	path: {
    srcHtml: 'src/*.html',
    buildHtml: 'build',

    srcPages: 'src/html/*.html',
    buildPages: 'build/pages',

    srcStatic: 'src/static/**/*',
    buildStatic: 'build/assets/',

    srcHtaccess: 'src/.htaccess',
    buildHtaccess: 'build',

    srcFonts: 'src/fonts/**/*',
    buildFonts: 'build/assets/fonts',

    srcStyles: 'src/scss/**/*.scss',
    buildStyles: 'build/assets/css',

    srcScripts: 'src/js/**/*.js',
    buildScripts: 'build/assets/js',

    srcImg: 'src/img/**/*.{gif,png,jpg,svg,webp}',
    buildImg: 'build/assets/img',

    srcSprite: 'src/img/svg/icons/**/*.svg',
    buildSprite: 'build/assets/img/svg/',

    serve: 'build',
    clean: 'build',
  }
};
