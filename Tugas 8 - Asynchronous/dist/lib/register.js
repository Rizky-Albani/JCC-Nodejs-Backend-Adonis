"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = require("fs");

require("regenerator-runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var path = 'data.json';

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(masukan) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _fs.readFile)(path, function (err, data) {
              if (err) throw err;
              var realData = JSON.parse(data);
              var array = masukan.split(",");
              var use = [];

              for (var i = 0; i < array.length; i++) {
                use.push(array[i]);
              }

              var name = use[0],
                  password = use[1],
                  role = use[2];

              if (role == "admin") {
                var newData = {
                  name: name,
                  password: password,
                  role: role,
                  isLogin: false
                };
              } else if (role == "trainer") {
                var newData = {
                  name: name,
                  password: password,
                  role: role,
                  isLogin: false,
                  student: []
                };
              }

              realData.push(newData);
              var stringFileToData = JSON.stringify(realData);
              (0, _fs.writeFile)(path, stringFileToData, function (err) {
                if (err) console.log(err);
                console.log("Berhasil register!");
              });
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;