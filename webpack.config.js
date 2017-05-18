const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPostCSS = new ExtractTextPlugin({
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
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader?sourceMap',
            'postcss-loader'
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          'file-loader?name=[name].[ext]&outputPath=images/',
        ],
      },
    ],
  },
  plugins: [
    extractPostCSS,
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
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"',
        },
      }),
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
