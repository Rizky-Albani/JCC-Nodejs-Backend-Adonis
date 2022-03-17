import { readFile, writeFile } from 'fs'
import "regenerator-runtime"
const path = 'data.json'

export default async (masukan) => {
    readFile(path, (err, data) => {
        if (err) throw err;
        let realData = JSON.parse(data);
        const array = masukan.split(",")
        let use = []
        for (let i = 0; i < array.length; i++) {
            use.push(array[i])
        }
        let[name, password, role] = use
        if (role == "admin"){
            var newData = {
                name,
                password,
                role,
                isLogin: false
            }
        } else if(role == "trainer"){
            var newData = {
                name,
                password,
                role,
                isLogin: false,
                student: []
            }
        }
        realData.push(newData);
        let stringFileToData = JSON.stringify(realData);
        writeFile(path,stringFileToData,(err) => {
            if (err) console.log(err)
            console.log("Berhasil register!")
        })
    })
}