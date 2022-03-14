export const sapa = nama => "halo selamat pagi, " + nama


export const convert = (nama, domisili, umur) => {
    return {
        nama,
        domisili,
        umur
    }
}

export const checkScore = (string = "") => {
    const array = string.split(":").join().split(",")
    let use = []
    for (let i = 1; i < array.length; i+=2) {
        use.push(array[i])
    }
    let[name, kelas, score] = use
    let obj = {
        name,
        kelas,
        score
    }
    return obj;
}

export const filterData = (kelas,...rest) => {
    let array = rest[0]
    let array2 = []
    let obj = {}
    for (let i = 0; i < array.length; i++) {
        var currentData = array[i]
        var currentClas = currentData.class

        if(currentClas == kelas){
            array2.push(obj = {
                nama: currentData.name,
                class: currentClas
            })
        }
    }
    return array2
}
