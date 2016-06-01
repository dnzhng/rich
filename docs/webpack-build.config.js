// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  context: path.join(__dirname, 'src'),

  entry: [
    './js/main'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/js/',
    filename: 'js/bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      {from: 'index.html'},
      {from: 'css/main.css', to: 'css'},
      {from: 'fonts', to: 'fonts'}
    ])
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.json$/, loader: 'json' }
    ]
  }
};
