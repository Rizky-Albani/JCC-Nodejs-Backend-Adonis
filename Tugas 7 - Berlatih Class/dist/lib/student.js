"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.student = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var student = /*#__PURE__*/function () {
  function student(nama) {
    _classCallCheck(this, student);

    this._name = nama;
    this._score = [];
    this._finalScore = 0;
  }

  _createClass(student, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(nama) {
      return this._name = nama;
    }
  }, {
    key: "finalScore",
    get: function get() {
      return this._finalScore;
    },
    set: function set(score) {
      return this._finalScore = score;
    }
  }, {
    key: "addScore",
    value: function addScore(score) {
      this._score.push(score);
    }
  }, {
    key: "score",
    get: function get() {
      return this._score;
    }
  }]);

  return student;
}();

exports.student = student;