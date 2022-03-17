import { readFile, writeFile } from 'fs/promises'
import "regenerator-runtime"
const path = 'data.json'



export default async (namaSiswa, namaTrainer) => {
    try{
        let data = await readFile(path)
        let realData = JSON.parse(data)
        let foundAdmin = realData.find(person => person.role == "admin")
        let admin = foundAdmin.isLogin
        let foundTrainer = realData.find(person => person.name == namaTrainer)
        let addSis = foundTrainer.student
        addSis.push({name: namaSiswa})
        let dataToWrite = JSON.stringify(realData)
        if(admin == false){
            console.log(" Hanya admin yang boleh mendaftarkan siswa kepada trainer (admin harus login).")
        }else{
           await writeFile(path, dataToWrite)
           console.log("Berhasil add siswa!") 
        }
    }catch(error){
        console.log(error)
    }
}