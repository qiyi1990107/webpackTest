"use strict";

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _webpackDevMiddleware = require("webpack-dev-middleware");

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require("webpack-hot-middleware");

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack3 = require("./webpack.config");

var _webpack4 = _interopRequireDefault(_webpack3);

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var compiler = (0, _webpack2.default)(_webpack4.default);
compiler.watch({}, function (err, stats) {
    console.log(stats.toString({
        chunks: false, // 使构建过程更静默无输出
        colors: true // 在控制台展示颜色
    }));
    //  console.log("10---》",stats);
});
// console.log(compiler); 
app.use((0, _webpackDevMiddleware2.default)(compiler, {
    publicPath: _webpack4.default.output.publicPath,
    stats: { colors: true, reasons: true, chunks: false }
}));
app.use((0, _webpackHotMiddleware2.default)(compiler));

app.listen(8080, function () {
    //  console.log("17--->",arguments);
    console.log('webpack test server port 8080');
});
//# sourceMappingURL=app.js.map