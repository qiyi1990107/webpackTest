import webpack from "webpack";
import express from "express";
import wdm from "webpack-dev-middleware";
import whm from 'webpack-hot-middleware';
import wc from "./webpack.config";
import { resolve } from "path";
let app = express();
let compiler = webpack(wc);
compiler.watch({}, (err, stats) => {
    console.log(stats.toString({
        chunks: false,  // 使构建过程更静默无输出
        colors: true    // 在控制台展示颜色
    }));
})
app.use(wdm(compiler, {
    publicPath: wc.output.publicPath,
    stats: { colors: true, reasons: true, chunks: false }
}));
app.use(whm(compiler))

app.listen(8080, () => {
    //  console.log("17--->",arguments);
    console.log('webpack test server port 8080');
})



