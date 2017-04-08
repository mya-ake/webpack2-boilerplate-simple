module.exports = {
  plugins: [
    require('postcss-import')({}),
    require('postcss-assets')({
      basePath: './src/',
      baseUrl: '/',   // フォルダがルートでない場合はここを変える
    }),
    require('precss')({}),
    require('autoprefixer')({
      browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions']
    }),
  ],
};