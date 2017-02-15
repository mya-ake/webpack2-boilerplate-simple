module.exports = {
  plugins: [
    require('postcss-smart-import')({}),
    require('precss')({}),
    require('autoprefixer')({
      browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions']
    }),
  ],
};