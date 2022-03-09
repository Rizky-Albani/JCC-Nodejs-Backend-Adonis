function teriak(){
    var x = "Halo JCC!"
    return x;
}

function kalikan(number1, number2){
    return number1 * number2;
}

function introduce(name, age, address, hobby){
    var combine = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
    return combine;
}

module.exports = {
    teriak: teriak,
    kalikan: kalikan,
    introduce: introduce,
}

//rizky_Albani