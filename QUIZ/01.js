function hitungVokal(str){
    var jumlah = 0
    for (let i = 0; i < str.length; i++) {
        if(str.substring(i,i+1)=="a"){
            jumlah++
        }else if(str.substring(i,i+1)=="i"){
            jumlah++
        }else if(str.substring(i,i+1)=="u"){
            jumlah++
        }else if(str.substring(i,i+1)=="e"){
            jumlah++
        }else if(str.substring(i,i+1)=="o"){
            jumlah++
        }else if(str.substring(i,i+1)=="A"){
            jumlah++
        }else if(str.substring(i,i+1)=="I"){
            jumlah++
        }else if(str.substring(i,i+1)=="U"){
            jumlah++
        }else if(str.substring(i,i+1)=="E"){
            jumlah++
        }else if(str.substring(i,i+1)=="O"){
            jumlah++
        }
    }
    return jumlah
}

console.log(hitungVokal("Adonis"))// Output:3

console.log(hitungVokal("Error"))//Output:2

console.log(hitungVokal("Eureka"))//Output:4

console.log(hitungVokal("Rsch")) // Output: 0