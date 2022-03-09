var x = require('./Lab/functions')

var teriak = x.teriak
var kalikan = x.kalikan
var introduce = x.introduce

var args = process.argv

switch(args[2]){
    case "teriak" : 
        console.log(teriak())
    break;
    case "kalikan" :
        console.log(kalikan(args[3], args[4]))
    break;
    case "introduce" : 
        console.log(introduce(args[3], args[4], args[5], args[6]))
    break;
}

//rizky_Albani