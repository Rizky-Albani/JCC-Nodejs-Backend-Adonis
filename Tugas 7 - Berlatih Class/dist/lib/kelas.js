"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kelas = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var kelas = /*#__PURE__*/function () {
  function kelas(nama, level, instructor) {
    _classCallCheck(this, kelas);

    this._nama = nama;
    this._level = level;
    this._intructor = instructor;
    this._students = [];
  }

  _createClass(kelas, [{
    key: "name",
    get: function get() {
      return this._nama;
    },
    set: function set(nama) {
      return this._nama = nama;
    }
  }, {
    key: "level",
    get: function get() {
      return this._level;
    },
    set: function set(level) {
      return this._level = level;
    }
  }, {
    key: "instructor",
    get: function get() {
      return this._intructor;
    },
    set: function set(instructor) {
      return this._intructor = instructor;
    }
  }, {
    key: "student",
    get: function get() {
      return this._students;
    }
  }, {
    key: "addStudent",
    value: function addStudent(newStud) {
      this._students.push(newStud);
    }
  }, {
    key: "generateRandomScore",
    value: function generateRandomScore() {
      return Math.floor(Math.random() * (100 - 50) + 50);
    }
  }, {
    key: "generator",
    value: function generator() {
      var _this = this;

      this._students.map(function (student) {
        student.addScore(_this.generateRandomScore());
      });
    }
  }, {
    key: "getFinalScore",
    value: function getFinalScore(score) {
      var sum = score.reduce(function (a, b) {
        return a + b;
      }, 0);
      return Math.ceil(sum / score.length);
    }
  }, {
    key: "graduate",
    value: function graduate() {
      var _this2 = this;

      var obj = {
        participant: [],
        completed: [],
        mastered: []
      };

      this._students.map(function (student) {
        var finalScore = _this2.getFinalScore(student.score);

        student.finalScore = finalScore;

        if (finalScore < 60) {
          obj.participant.push(student);
        } else if (finalScore >= 60 && finalScore < 85) {
          obj.completed.push(student);
        } else if (finalScore > 85) {
          obj.mastered.push(student);
        }
      });

      return obj;
    }
  }]);

  return kelas;
}();

exports.kelas = kelas;