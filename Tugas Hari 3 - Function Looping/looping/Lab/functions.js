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

function persegiPanjang(panjang, lebar) {
    var x = " "
    for (let i = 0; i < lebar; i++) {
      for (let j = 0; j < panjang; j++) {
        x += "#"
      }
      if(i == lebar){
          continue
      }else if(i<lebar){
          console.log(x)
      }
        x = " "
    }
    console.log(x)
}
  
    
function tangga(sisi){
    var x = " "
    for (let i = 0; i < sisi; i++) {
        
        for (let j = 0; j < 1; j++) {
            x += "#"
        }
        console.log(x)
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