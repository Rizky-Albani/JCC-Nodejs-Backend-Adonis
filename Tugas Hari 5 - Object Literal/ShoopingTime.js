function shoppingTime(memberId, money){
    var namaBarang = [ 'Sepatu Stacattu','Baju Zoro','Baju H&N', 'Sweater Uniklooh','Casing Handphone']
    var harga = [1500000, 500000, 250000, 175000, 50000]
    var obj = {}
    obj.memberId = memberId
    obj.money = money
    obj.listPurchased = []
    
    if(memberId == "" || money == undefined){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }else if(money < 50000){
        return "Mohon maaf, uang tidak cukup"
    }else{
        for (let i = 0; i < harga.length; i++) {
            if(money >= harga[i]){
                 obj.listPurchased.push(namaBarang[i])
                 money -= harga[i]
            }
        }
    }
    obj.changeMoney = money

    return obj
}

console.log(shoppingTime( '324193hDew2', 700000));
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime("", 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000))
console.log(shoppingTime())