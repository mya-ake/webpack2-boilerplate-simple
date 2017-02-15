const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
  filename: './css/[name].css',
  allChunks: true
});
const extractSCSS = new ExtractTextPlugin({
  filename: './css/[name].css',
  allChunks: true
});

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader'
          ],
        }),
      },
    ],
  },
  plugins: [
    extractCSS,
    extractSCSS,
  ],
};

switch (process.env.NODE_ENV) {
  case 'development': {
    module.exports.devtool = '#eval-source-map';
    break;
  }
  case 'production': {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ]);
    break;
  }
}
