"use strict";

var _path = require("path");

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _htmlWebpackPlugin = require("html-webpack-plugin");

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _extractTextWebpackPlugin = require("extract-text-webpack-plugin");

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  // context: resolve(__dirname, "src"),
  entry: ['webpack-hot-middleware/client', "./src/index.js"],
  // entry: {
  //   app: "./index.js" 
  // },
  output: {
    path: (0, _path.resolve)(__dirname, "build"),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    // enable HMR on the server
    contentBase: (0, _path.resolve)(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: _extractTextWebpackPlugin2.default.extract({
            use: 'css-loader',
            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
          })
        }
      }
    }, {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      use: 'json-loader'
    },

    // {
    //   test: /\.css$/,
    //   use: [
    //     { loader: "style-loader" },
    //     { loader: "css-loader" },
    //   ]
    // }
    {
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      use: [{
        loader: "url-loader", options: { limit: 2000, name: "[path][name].[ext]" }
      }]
    }]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".vue"]
  },
  //   externals : {
  //   vue: {commonjs2:'vue'}
  // },
  plugins: [new _webpack2.default.HotModuleReplacementPlugin(), new _webpack2.default.NamedModulesPlugin(), new _htmlWebpackPlugin2.default({ template: './src/index.tpl.html' }), new _extractTextWebpackPlugin2.default("style.css")

  // prints more readable module names in the browser console on HMR updates
  ]
};
//# sourceMappingURL=webpack.config.js.map