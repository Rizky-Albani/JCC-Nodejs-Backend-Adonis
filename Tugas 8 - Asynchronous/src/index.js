import addSiswa from "./lib/addSiswa";
import register from "./lib/register";
import login from "./lib/login";


const args = process.argv.slice(2)
const command = args[0]

switch (command){
    case "register":
        let masukan = args[1]
        register(masukan)
        break
    case "login":
        let input = args[1]
        login(input)
        break
    case "addSiswa":
        let [namaSiswa, namaTrainer] = args[1].split(",")
        addSiswa(namaSiswa, namaTrainer)
        break
}