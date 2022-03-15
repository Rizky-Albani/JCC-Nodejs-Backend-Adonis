"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootcamp = void 0;

var _kelas = require("./kelas");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var bootcamp = /*#__PURE__*/function () {
  function bootcamp(nama) {
    _classCallCheck(this, bootcamp);

    this._name = nama;
    this._class = [];
  }

  _createClass(bootcamp, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(nama) {
      return this._name = nama;
    }
  }, {
    key: "class",
    get: function get() {
      return this._class;
    }
  }, {
    key: "createClass",
    value: function createClass(namaKelas, level, instructor) {
      var kelasBaru = new _kelas.kelas(namaKelas, level, instructor);

      this._class.push(kelasBaru);
    }
  }, {
    key: "register",
    value: function register(namaKelas, student) {
      var kelass = this._class.find(function (kelas) {
        return kelas.name == namaKelas;
      });

      kelass.addStudent(student);
    }
  }, {
    key: "runBatch",
    value: function runBatch() {
      for (var i = 0; i < this._class.length; i++) {
        var currentClass = this._class[i];

        for (var j = 0; j < 4; j++) {
          currentClass.generator();
        } //console.log(currentClass.student)


        console.log('graduate from ' + currentClass.name + ": ", currentClass.graduate());
      }
    }
  }]);

  return bootcamp;
}();

exports.bootcamp = bootcamp;