function kelompokAngka(arr){
    var tampung1 = []
    var tampung2 = []
    var tampung3 = []
    var x 
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 == 0){
            x = arr[i]
            tampung3.push(x)
        }else if(arr[i] % 2 == 0){
            x = arr[i]
            tampung2.push(x)
        }else if(arr[i] % 2 == 1){
            x = arr[i]
            tampung1.push(x)
        }
    }
    var hasil = [tampung1, tampung2, tampung3]
    return hasil
}

console.log(kelompokAngka([1,2,3,4,5,6,7]))

//Output:[[1,5,7],[2,4],[3,6]]

console.log(kelompokAngka([13,27,11,15]))

//Output:[[13,11],[],[27,15]]

console.log(kelompokAngka([]))

//output:[[],[],[]]