import {
    sapa,
    convert,
    scoreCheck,
    filterData
} from "./lib/function"

const args = process.argv.slice(2)
const command = args[0]

switch (command){
    case "sapa":
        const name = args[1]
        console.log(sapa(name))
        break
    case "convert":
        const parameter = args.slice(1)
        let[nama, domisili, umur] = parameter
        console.log(convert(nama, domisili, umur))
        break
    case "scoreCheck":
        const string = args[1]
        console.log(scoreCheck(string))
        break
    case "filterData":
        const data = [
            { name: "Ahmad", class: "adonis"},
            { name: "Regi", class: "laravel"},
            { name: "Bondra", class: "adonis"},
            { name: "Iqbal", class: "vuejs" },
            { name: "Putri", class: "Laravel" }
        ]
        let kelas = args[1]
        console.log(filterData(kelas, data))
        break
}