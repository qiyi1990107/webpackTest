"use strict";

var _path = require("path");

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _htmlWebpackPlugin = require("html-webpack-plugin");

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  context: (0, _path.resolve)(__dirname, "src"),
  entry: ['webpack-hot-middleware/client?reload=true', "./index.js"],
  output: {
    path: (0, _path.resolve)(__dirname, "build"),
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: (0, _path.resolve)(__dirname, 'build'),
    // match the output path
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: "\x1B[32m"
      }
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [{ loader: "style-loader" }, { loader: "css-loader" }]
    }, {
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      use: [{
        loader: "url-loader", options: { limit: 2000, name: "[path][name].[ext]" }
      }]
    }]
  },

  plugins: [new _webpack2.default.HotModuleReplacementPlugin(), new _webpack2.default.NamedModulesPlugin(), new _htmlWebpackPlugin2.default({ template: './index.html' })]
};
//# sourceMappingURL=webpack.config.js.map