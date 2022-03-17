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
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(namaSiswa, namaTrainer) {
    var data, realData, foundAdmin, admin, foundTrainer, addSis, dataToWrite;
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
            foundAdmin = realData.find(function (person) {
              return person.role == "admin";
            });
            admin = foundAdmin.isLogin;
            foundTrainer = realData.find(function (person) {
              return person.name == namaTrainer;
            });
            addSis = foundTrainer.student;
            addSis.push({
              name: namaSiswa
            });
            dataToWrite = JSON.stringify(realData);

            if (!(admin == false)) {
              _context.next = 15;
              break;
            }

            console.log(" Hanya admin yang boleh mendaftarkan siswa kepada trainer (admin harus login).");
            _context.next = 18;
            break;

          case 15:
            _context.next = 17;
            return (0, _promises.writeFile)(path, dataToWrite);

          case 17:
            console.log("Berhasil add siswa!");

          case 18:
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;