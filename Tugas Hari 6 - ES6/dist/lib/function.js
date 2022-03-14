"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sapa = exports.filterData = exports.convert = exports.checkScore = void 0;

var sapa = function sapa(nama) {
  return "halo selamat pagi, " + nama;
};

exports.sapa = sapa;

var convert = function convert(nama, domisili, umur) {
  return {
    nama: nama,
    domisili: domisili,
    umur: umur
  };
};

exports.convert = convert;

var checkScore = function checkScore() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var array = string.split(":").join().split(",");
  var use = [];

  for (var i = 1; i < array.length; i += 2) {
    use.push(array[i]);
  }

  var name = use[0],
      kelas = use[1],
      score = use[2];
  var obj = {
    name: name,
    kelas: kelas,
    score: score
  };
  return obj;
};

exports.checkScore = checkScore;

var filterData = function filterData(kelas) {
  var array = arguments.length <= 1 ? undefined : arguments[1];
  var array2 = [];
  var obj = {};

  for (var i = 0; i < array.length; i++) {
    var currentData = array[i];
    var currentClas = currentData["class"];

    if (currentClas == kelas) {
      array2.push(obj = {
        nama: currentData.name,
        "class": currentClas
      });
    }
  }

  return array2;
};

exports.filterData = filterData;