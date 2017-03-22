import { resolve } from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
module.exports = {
  context: resolve(__dirname, "src"),
  entry: ['webpack-hot-middleware/client?reload=true', "./index.js",],
  // entry: {
  //   app: "./index.js" 
  // },
  output: {
    path: resolve(__dirname, "build"),
    filename: '[name].js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    // enable HMR on the server
    contentBase: resolve(__dirname, 'build'),
    // match the output path
    // stats: {
    //   assets: true,
    //   children: false,
    //   chunks: false,
    //   hash: false,
    //   modules: false,
    //   publicPath: false,
    //   timings: true,
    //   version: false,
    //   warnings: true,
    //   colors: { green: '\u001b[32m', }
    // },
    // match the output `publicPath`
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   loaders: {
        //     css: ExtractTextPlugin.extract({
        //       use: 'css-loader',
        //       fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
        //     })
        //   }
        // }
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
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
        use: [
          {
            loader: "url-loader", options: { limit: 2000, name: "[path][name].[ext]" }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      // path.resolve(__dirname, "app")
    ],
    extensions: [".js", ".vue"],
  },
  //   externals : {
  //   vue: {commonjs2:'vue'}
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' }),
    // new ExtractTextPlugin("style.css")

    // prints more readable module names in the browser console on HMR updates
  ],
}