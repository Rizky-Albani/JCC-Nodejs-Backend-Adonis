import { readFile, writeFile } from 'fs/promises'
import "regenerator-runtime"
const path = 'data.json'

export default async (masukan) => {
    try{
        let data = await readFile(path)
    let realData = JSON.parse(data)
    const array = masukan.split(",")
        let use = []
        for (let i = 0; i < array.length; i++) {
            use.push(array[i])
        }
    for (let i = 0; i < realData.length; i++) {
        var currentData = realData[i]
        var currentName = currentData.name
        var currentPass = currentData.password

        if(currentName == array[0] && currentPass == array[1]){
                currentData.isLogin = true
        }
    }
    let stringFileToData = JSON.stringify(realData);
    writeFile(path,stringFileToData)
        console.log("Berhail Login!")
    }catch (error){
        console.log("error")
    }
    
}