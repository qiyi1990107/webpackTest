'use strict';

var _rimraf = require('rimraf');

var _rimraf2 = _interopRequireDefault(_rimraf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function del() {
    (0, _rimraf2.default)(__dirname + '/dist', { nosort: true, dot: true, ignore: ['dist/.git'] }, function (res) {
        console.log(res);
    });
} /**
   * Created by wo on 2017/3/6.
   */


del();
//# sourceMappingURL=del.js.map