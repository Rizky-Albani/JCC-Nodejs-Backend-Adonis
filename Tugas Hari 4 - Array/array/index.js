var on = require('./Lab/array')

var range = on.range
var rangeWithStep = on.rangeWithStep
var sum = on.sum
var dataHandling = on.dataHandling
var balikKata = on.balikKata

var args = process.argv

switch(args[2]){
    case "range": 
    var start = parseInt(args[3])
    var finish = parseInt(args[4])
    console.log(range(start, finish))
    break
    case "rangeWithStep": console.log(rangeWithStep(parseInt(args[3]), parseInt(args[4]), parseInt(args[5])))
    break
    case "sum": console.log(sum(parseInt(args[3]), parseInt(args[4]), parseInt(args[5])))
    break
    case "dataHandling": console.log(dataHandling())
    break
    case "balikKata": console.log(balikKata(args[3]))
    break
}