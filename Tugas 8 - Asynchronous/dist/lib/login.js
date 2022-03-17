"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _promises = require("fs/promises");

require("regenerator-runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var path = 'data.json';

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(masukan) {
    var data, realData, array, use, i, _i, currentData, currentName, currentPass, stringFileToData;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _promises.readFile)(path);

          case 3:
            data = _context.sent;
            realData = JSON.parse(data);
            array = masukan.split(",");
            use = [];

            for (i = 0; i < array.length; i++) {
              use.push(array[i]);
            }

            for (_i = 0; _i < realData.length; _i++) {
              currentData = realData[_i];
              currentName = currentData.name;
              currentPass = currentData.password;

              if (currentName == array[0] && currentPass == array[1]) {
                currentData.isLogin = true;
              }
            }

            stringFileToData = JSON.stringify(realData);
            (0, _promises.writeFile)(path, stringFileToData);
            console.log("Berhail Login!");
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.log("error");

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;