function While(){
    console.log("LOOPING PERTAMA")
    var kondisi = true
    var x = 2
    while(kondisi){
        console.log(x + " - I love coding")
        x = x + 2
        if(x > 20){
            kondisi=false
        }
    }
    console.log("LOOPING KEDUA")
    var y = 20
    kondisi = true
    while(kondisi){
        console.log(y + " - I will become a backend developer")
        y = y - 2
        if(y < 2){
            kondisi=false
        }
    }
}

function For(){
    console.log("OUTPUT")
    for (let i = 1; i < 21; i++) {
        switch (i%2) {
            case 1: 
            if(i%3==0){
                console.log(i + " - I love coding")
            }else{
                console.log(i + " - Santai")
            }
            break;
            case 0: console.log(i + " - Berkualitas")
        }
    }
}

function persegiPanjang(panjang, lebar){
    var kondisi = true
    var i = 1
    var z = panjang
    while(kondisi){
        switch(z){
            case 1 : var panjangg = "#"
            break;
            case 2 : panjangg = "##"
            break;
            case 3 : panjangg = "###"
            break;
            case 4 : panjangg = "####"
            break;
            case 5 : panjangg = "#####"
            break;
            case 6 : panjangg = "######"
            break;
            case 7 : panjangg = "#######"
            break;
            case 8 : panjangg = "########"
            break;
            case 9 : panjangg = "#########"
            break;
            case 10 : panjangg = "##########"
            break;
        }
        console.log(panjangg)
        i++
        if(i > lebar){
            kondisi=false
        }
    }
}

    
function tangga(sisi){
    var kondisi = true
    var i = 1
    while(kondisi){
        switch(i){
            case 1 : var a = "#"
            break;
            case 2 : var a = "##"
            break;
            case 3 : var a = "###"
            break;
            case 4 : var a = "####"
            break;
            case 5 : var a = "#####"
            break;
            case 6 : var a = "######"
            break;
            case 7 : var a = "#######"
            break;
            case 8 : var a = "########"
            break;
            case 9 : var a = "#########"
            break;
            case 10 : var a = "##########"
            break;
            case 11 : var a = "###########"
            break;
            case 12 : var a = "############"
            break;
        }
        console.log(a)
        i++
        if(i > sisi){
            kondisi=false
        }
    }
}

function catur(sisi){
    var kondisi = true
    var i = 1
    while(kondisi){
        switch(i%2){
            case 1 : var b = " # # # #"
            break
            case 0 : var b = "# # # # "            
            break
        }
        console.log(b)
        i++
        if(i > sisi){
            kondisi=false
        }
    }
}


module.exports = {
    while: While,
    for: For,
    persegiPanjang: persegiPanjang,
    tangga: tangga,
    catur: catur
}

//rizky_Albani