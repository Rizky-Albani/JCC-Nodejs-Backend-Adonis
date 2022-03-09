var x = require("./Lab/functions")

var While = x.while
var For = x.for
var persegiPanjang = x.persegiPanjang
var tangga = x.tangga
var catur = x.catur

var args = process.argv

switch(args[2]){
    case "while": console.log(While())
    break
    case "for": console.log(For())
    break
    case "persegiPanjang": 
    var panjang = args[3]
    var lebar = args[4]
    console.log(persegiPanjang(panjang, lebar))
    break
    case "tangga": console.log(tangga(args[3]))
    break
    case "catur": console.log(catur(args[3]))
    break
}

//rizky_Albani