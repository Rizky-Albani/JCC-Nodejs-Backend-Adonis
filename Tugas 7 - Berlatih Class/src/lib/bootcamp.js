import { kelas } from "./kelas"

export class bootcamp{
    constructor(nama){
        this._name = nama
        this._class = []
    }

    get name(){
        return this._name
    }
    
    get class(){
        return this._class
    }

    set name(nama){
        return this._name = nama
    }

    createClass(namaKelas, level, instructor){
        let kelasBaru = new kelas(namaKelas, level, instructor)
        this._class.push(kelasBaru)
    }

    register(namaKelas, student){
        let kelass = this._class.find(kelas => kelas.name == namaKelas)
        kelass.addStudent(student)
    }

    runBatch(){
        for (let i = 0; i < this._class.length; i++) {
           let currentClass = this._class[i]
            for (let j = 0; j < 4; j++) { 
               currentClass.generator()
           }
        //console.log(currentClass.student)
        console.log('graduate from ' + currentClass.name + ": ", currentClass.graduate())
        }
    }
}