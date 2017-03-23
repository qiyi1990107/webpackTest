import webpack from "webpack";
import express from "express";
import wdm from "webpack-dev-middleware";
import whm from 'webpack-hot-middleware';
import wc from "./webpack.config";
import { resolve } from "path";
import fs from "fs";
global.Vue = require('vue');
// var layout = fs.readFileSync("./src/index.html", 'utf8');
let app = express();
let compiler = webpack(wc);
var render = require('vue-server-renderer').createRenderer();
const vm = new global.Vue({
    render(h) {
        return h('div', 'hello')
    }
});

app.use(wdm(compiler, {
    publicPath: wc.output.publicPath,
    stats: {
        colors: true,
        chunks: false,
        source: true,
    }
}));
app.use(whm(compiler))


// ts(app);

app.get("*",(req,res)=>{
    console.log(req.path);
})

// app.use('/src', express.static(
//     resolve(__dirname, 'src')
// ))


app.listen(8081, () => {
    //  console.log("17--->",arguments);
    console.log('webpack test server port 8080');
})



