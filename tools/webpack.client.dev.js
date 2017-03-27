import webpack from "webpack";
import base from "./webpack.base";
import merge from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
const dev = Object.assign({}, base, {
  devtool: "cheap-eval-source-map",
  target:"web",
  plugins: [
    new webpack.DefinePlugin(
      {
        "process.env": {
          NODE_ENV: JSON.stringify("development")
        }
      },

    ),
    new HtmlWebpackPlugin({
      template: './index.tpl.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
})

export default dev;