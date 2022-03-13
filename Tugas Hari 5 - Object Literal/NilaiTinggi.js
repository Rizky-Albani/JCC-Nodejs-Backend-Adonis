function nilaiTertinggi(siswa){
    var obj = {}
    
    for (let i = 0; i < siswa.length; i++) {
        var currentSiswa = siswa[i]

        var currentClas = currentSiswa.class

        if(!obj.hasOwnProperty(currentClas)){
            obj[currentClas] = {
                name: currentSiswa.name,
                score: currentSiswa.score
            }
        }else{
            var existingSiswa = obj[currentClas]
            if(currentSiswa.score > existingSiswa.score){
                obj[currentClas] = currentSiswa
            }
        }
    }

    return obj
}

console.log(nilaiTertinggi([
    {
      name: 'Asep',
      score: 90,
      class: 'adonis'
    },
    {
      name: 'Ahmad',
      score: 85,
      class: 'vuejs'
    },
    {
      name: 'Regi',
      score: 74,
      class: 'adonis'
    },
    {
      name: 'Afrida',
      score: 78,
      class: 'reactjs'
    }
  ]))