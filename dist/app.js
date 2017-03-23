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

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.Vue = require('vue');
// var layout = fs.readFileSync("./src/index.html", 'utf8');
var app = (0, _express2.default)();
var compiler = (0, _webpack2.default)(_webpack4.default);
var render = require('vue-server-renderer').createRenderer();
var vm = new global.Vue({
    render: function render(h) {
        return h('div', 'hello');
    }
});

app.use((0, _webpackDevMiddleware2.default)(compiler, {
    publicPath: _webpack4.default.output.publicPath,
    stats: {
        colors: true,
        chunks: false,
        source: true
    }
}));
app.use((0, _webpackHotMiddleware2.default)(compiler));

// ts(app);

app.get("*", function (req, res) {
    console.log(req.path);
});

// app.use('/src', express.static(
//     resolve(__dirname, 'src')
// ))


app.listen(8081, function () {
    //  console.log("17--->",arguments);
    console.log('webpack test server port 8080');
});
//# sourceMappingURL=app.js.map