const isDevMode = false;

module.exports = {
  isDevMode,
  path: {
    srcHtml: 'src/*.html',
    buildHtml: 'build',

    srcPages: 'src/html/*.html',
    buildPages: 'build',

    srcLibs: 'src/static/libs/*',
    buildLibs: 'build/assets/libs',

    srcAjax: 'src/static/ajax/*',
    buildAjax: 'build/assets/ajax',

    srcHtaccess: 'src/static/.htaccess',
    buildHtaccess: 'build',

    srcFonts: 'src/fonts/*',
    buildFonts: 'build/assets/fonts',

    srcStyles: 'src/scss/*.scss',
    buildStyles: 'build/assets/css',

    srcScripts: 'src/js/*.js',
    buildScripts: 'build/assets/js',

    srcImg: 'src/img/**/*.{gif,png,jpg,svg,webp}',
    buildImg: 'build/assets/img',

    srcSprite: 'src/img/svg/icons/**/*.svg',
    buildSprite: 'build/assets/img/svg/',

    serve: 'build',
    clean: 'build',
  }
};
