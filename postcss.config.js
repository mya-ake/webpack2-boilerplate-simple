module.exports = {
  plugins: [
    require('postcss-import')({}),
    require('precss')({}),
    require('autoprefixer')({
      browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions']
    }),
  ],
};