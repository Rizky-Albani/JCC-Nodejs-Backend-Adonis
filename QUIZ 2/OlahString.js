var data = {
    name: 'Bondra',
    nilai:70,
    kelas:'Adonis',
    isLogin:true
    }

const updateData(masukan) => {
    const array = Object.entries(masukan);

    var currentName = data.name
    var currentNilai = data.nilai
    var currentKelas = data.kelas
    var curentLogin = data.isLogin

    for (let i = 0; i < array.length; i+=2) {
        if(currentName == array[i]){
            data.name = array[i+1]
        }else if(currentNilai == array[i]){
            data.nilai = array[+1]
        }else if(currentKelas == array[i]){
            data.kelas = array[+1]
        }else if(currentLogin == array[i]){
            data.isLogin = array[+1]
        }
    }
    console.log(data)
}