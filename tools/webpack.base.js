import { resolve } from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
// console.log(resolve(__dirname, "./dist"));
module.exports = {
  context: resolve(__dirname, ".."),
  entry: ['webpack-hot-middleware/client', "./src/index.js",],
  // entry: {
  //   app: "./index.js" 
  // },
  output: {
    path: resolve(__dirname, "../dist"),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  devtool: 'eval-source-map',
  // devServer: {
  //   hot: true,
  //   // enable HMR on the server
  //   // contentBase: resolve(__dirname, 'dist'),
  // },
  module: {
    rules: [
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   options: {
      //     loaders: {
      //       css: ExtractTextPlugin.extract({
      //         use: 'css-loader',
      //         fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
      //       })
      //     }
      //   }
      // },
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
  // resolve: {
  //   modules: [
  //     "node_modules",
  //     // path.resolve(__dirname, "app")
  //   ],
  //   extensions: [".js", ".vue"],
  // },
  //   externals : {
  //   vue: {commonjs2:'vue'}
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new HtmlWebpackPlugin({ template: './src/index.tpl.html' }),
    new ExtractTextPlugin("/dist/css/style.css")

    // prints more readable module names in the browser console on HMR updates
  ],
}