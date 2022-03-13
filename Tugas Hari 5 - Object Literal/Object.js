var dataOrang = [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]]
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
    
function arrayToObject(data){
    var now = new Date()
    var thisYear = now.getFullYear()
    
    var objekKey = ["firstname", "Lastname", "gender", "age"]
    var dataOrang1Obj = {}
    var dataOrang2Obj = {}

    for (let i = 0; i < 3; i++) {
        dataOrang1Obj[objekKey[i]] = data[0][i]
    }
    for (let i = 0; i < 3; i++) {
         dataOrang2Obj[objekKey[i]] = data[1][i]
    }

    if(data[0][3] == undefined || data[0][3] > thisYear){
        dataOrang1Obj[objekKey[3]] = "Invalid birth year"
    }else{
        dataOrang1Obj[objekKey[3]] = data[0][3]
    }
    
    if(data[1][3] == undefined || data[01][3] > thisYear){
        dataOrang2Obj[objekKey[3]] = "Invalid birth year"
    }else{
        dataOrang2Obj[objekKey[3]] = thisYear - data[1][3]
    }


    return console.log("1. " + data[0][0] + data [0][1] + ": " + JSON.stringify(dataOrang1Obj)) + console.log("2. " + data[1][0] + data [1][1] + ": " + JSON.stringify(dataOrang2Obj))
}

console.log(arrayToObject(dataOrang))
console.log(arrayToObject(people))
console.log(arrayToObject(people2))