var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();
const fspromises = require("fs/promises")
const path = 'data.json'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//realise 0
router.post('/register', async (req, res) => {
  try{
    let {name, password, role} = req.body

    let obj = {name, password, role, isLogin: false}
    let data = await fspromises.readFile(path)
    let realData = JSON.parse(data)
    realData.push(obj)
    await fspromises.writeFile(path, JSON.stringify(realData))
    return res.status(201).json({ message: "Berhasil register" })
  }catch(error){
    console.log(error)
    return res.status(400).json({message: 'error', error: error})
  }
})

//realise 1
router.get('/karyawan', async (req, res) => {
  try{
    let {name, password, role} = req.body

    let obj = {name, password, role, isLogin: false}
    let data = await fspromises.readFile(path)
    let realData = JSON.parse(data)
    realData.push(obj)
    await fspromises.writeFile(path, JSON.stringify(realData))
    return res.status(201).json(realData)
  }catch(error){
    console.log(error)
    return res.status(400).json({message: 'error', error: error})
  }
})

//realise 2
router.post('/login', async (req, res) => {
  try{
    let {name, password} = req.body
    let data = await fspromises.readFile(path)
    let realData = JSON.parse(data)
    for (let i = 0; i < realData.length; i++) {
        var currentData = realData[i]
        var currentName = currentData.name
        var currentPass = currentData.password

        if(currentName == name && currentPass == password){
                currentData.isLogin = true
        }
    }
    await fspromises.writeFile(path, JSON.stringify(realData))
    return res.status(201).json({ message: "Berhasil login" })
  }catch(error){
    return res.status(400).json({message: 'error', error: error})
  }
})

//realise 3
router.post('/karyawan/:name/siswa', async (req, res) => {
  try{
    let {name, kelas} = req.body
    let data = await fspromises.readFile(path)
    let realData = JSON.parse(data)
    let foundAdmin = realData.find(person => person.role == "admin")
    let admin = foundAdmin.isLogin
    let foundTrainer = realData.find(person => person.role == 'trainer')
    foundTrainer['student'] = []
    let addSis = foundTrainer.student
        addSis.push({name: name}, {class: kelas})
      if(admin == false){
          console.log(" Hanya admin yang boleh mendaftarkan siswa kepada trainer (admin harus login).")
      }else{
          await fspromises.writeFile(path, JSON.stringify(realData))
          console.log("Berhasil add siswa!") 
        }
    return res.status(201).json({ message : "Berhasil add siswa" })
  }catch(error){
    return res.status(400).json({message: 'error', error: error})
  }
})
module.exports = router;
