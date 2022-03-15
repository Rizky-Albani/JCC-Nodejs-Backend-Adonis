"use strict";

var _bootcamp = require("./lib/bootcamp");

var _student = require("./lib/student");

var jcc = new _bootcamp.bootcamp("jabarcodingcamp");
jcc.createClass("Laravel", "beginner", "abduh");
jcc.createClass("React", "beginner", "abdul"); //console.log(jcc.class)
//realise 1

var names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"];
names.map(function (nama, index) {
  var newStud = new _student.student(nama);
  var kelas = jcc["class"][index % 2].name;
  jcc.register(kelas, newStud);
}); //jcc.class.forEach(kelas => {
//console.log(kelas)
//});
//realise3

jcc.runBatch();