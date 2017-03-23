'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  alert(17000); 
// // console.log(Vue,App);
new _vue2.default({
  el: '#app',
  render: function render(h) {
    return h(_App2.default);
  }
});
//# sourceMappingURL=index.js.map