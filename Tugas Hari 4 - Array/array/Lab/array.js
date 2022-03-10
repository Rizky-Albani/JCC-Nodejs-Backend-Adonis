function range(startNum, finishNum){
    var array = []
    array.push(startNum)
    if(startNum < finishNum){
        for (let i = startNum; i <= finishNum; i++) {
            array.push(startNum)
            startNum++
        }
    }else if(startNum > finishNum){
        for (let i = startNum; i >= finishNum; i--) {
            array.push(startNum)
            startNum--
        }
    }
    return array
}



function rangeWithStep(startNum, finishNum, step){
    var array = []
    var x = startNum
    if(startNum < finishNum){
        var batas = finishNum/step
        for (let i = startNum; i <= batas; i++) {
            array.push(x)
            x += step
        }
    }else if(startNum > finishNum){
        var start = startNum/step
        for (let i = start; i >= finishNum; i--) {
            array.push(x)
            x-=step
        }
    }
    return array
}

function sum(startNum, finishNum, step){
    var array = []
    var x = startNum
    if(step == null){
        step = 1
    }
    if(finishNum == null){
        array.push(x)
    }
    if(startNum < finishNum){
        var batas = finishNum/step
        for (let i = startNum; i <= batas; i++) {
            array.push(x)
            x+=step
        }
    }else if(startNum > finishNum){
        var start = startNum/step
        for (let i = start; i >= finishNum; i--) {
            array.push(x)
            x-=step
        }
    }
    var tampung = 0
    for (let i = 0; i < array.length; i++) {
        tampung = tampung + array[i];
        
    }
    return tampung
}

function dataHandling(){
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ] 

    for (let i = 0; i < 4; i++){
        console.log("Nomor ID: " + input[i][0])
        console.log("Nama Lengkap: " + input[i][1])
        console.log("TTL: " + input[i][2] + " " + input[i][3])
        console.log("Hobi: " + input[i][4])
        console.log()
    }
}

function balikKata(kata){
    var reverse = ""
    for (let i = kata.length-1; i >= 0; i--) {
        reverse += kata[i]
    }

    return reverse
}

module.exports = {
    range: range,
    rangeWithStep: rangeWithStep,
    sum: sum,
    dataHandling: dataHandling,
    balikKata: balikKata
}