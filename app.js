import webpack from "webpack";
import express from "express";
import wdm from "webpack-dev-middleware";
import whm from 'webpack-hot-middleware';
import wc from "./webpack.config";
import { resolve,join } from "path";

let app = express();
let compiler = webpack(wc);
let source =  wdm(compiler, { 
    publicPath: wc.output.publicPath,
    stats: {
        colors: true,
        chunks: false,
        source: true,
    }
})
app.use(source);
let template="";
compiler.plugin('done', (compilation) => {
    let fs = source.fileSystem;
    const html = (() => {
        let filePath = join(wc.output.path,"index.html")
        if(fs.existsSync(filePath)){
            template = fs.readFileSync(filePath, 'utf-8');
        }
        
        return template;
    })()
})

// compiler.

app.use(whm(compiler))
// console.log(compiler);


app.get("*", (req, res) => {
    res.send(template);
})



app.listen(8081, () => {
    //  console.log("17--->",arguments);
    console.log('webpack test server port 8080');
})



