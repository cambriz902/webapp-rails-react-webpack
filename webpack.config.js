var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, 'public', 'webpack');
var APP_DIR = path.resolve(__dirname, 'frontend');
var FRONTEND_COMPONENTS_DIR = path.join(__dirname, 'frontend', 'components');
var RAILS_STYLES_DIR = path.join(__dirname, 'app', 'assets', 'stylesheets');

var config = {
  entry: "./frontend/index.js",
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
