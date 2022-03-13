function naikAngkot(listPenumpang){
    var rute = ['A', 'B', 'C', 'D', 'E', 'F']
    var obj = {}
    
    for (let i = 0; i < listPenumpang.length; i++) {
            penumpang = listPenumpang[i][0]
            naikDari = listPenumpang[i][1]
            tujuan = listPenumpang[i][2]
            bayar = (rute.indexOf(tujuan) - rute.indexOf(naikDari)) * 2000
            obj[i] = {
                penumpang: penumpang,
                naikDari: naikDari,
                tujuan: tujuan,
                bayar: bayar
            }
    }
    return obj
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]))