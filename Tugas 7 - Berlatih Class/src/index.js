import { bootcamp,} from "./lib/bootcamp"
import { student } from "./lib/student"

const jcc = new bootcamp("jabarcodingcamp")

jcc.createClass("Laravel", "beginner", "abduh")

jcc.createClass("React", "beginner", "abdul")

//console.log(jcc.class)

//realise 1
let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"]
names.map((nama, index) => {
  let newStud = new student(nama)
  let kelas = jcc.class[index % 2].name
  jcc.register(kelas, newStud)
  
})
//jcc.class.forEach(kelas => {
//console.log(kelas)
//});


//realise3
jcc.runBatch()