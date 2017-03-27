import webpack from "webpack";
import merge from "webpack-merge";
import base from "./webpack.base";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";


//  let prodConfig = base.module.rules.concat({
//         test: /\.vue$/,
//         loader: 'vue-loader',
//         options: {
//           loaders: {
//             css: ExtractTextPlugin.extract({
//               use: 'css-loader',
//               fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
//             })
//           }
//         }
//       })



let prodConfig = base.module.rules.unshift({
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    postcss: [
      require('autoprefixer')(),
      
    ],
    cssModules: {
      minimize: true,
    },
    loaders: {
      css: ExtractTextPlugin.extract({
        use: ['css-loader',"postcss-loader"],
        fallback: 'vue-style-loader'
      })
    }
  }
})



 

console.log(prodConfig)

const config = Object.assign({}, base, {
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common',
    //   filename: "common-hash.min.js"
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress: true, sourceMap: true,
    }),
    new ExtractTextPlugin("/dist/style.css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "production"
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html'
    })
  ]
});
// console.log("12----》",config);
function prod() {
 


  let build = webpack(config);
  build.run((err, stats) => {
    console.log(stats.toString({
      chunks: false,  // Makes the build much quieter
      colors: true    // Shows colors in the console
    }));
  })
}

prod();
// export default prod;