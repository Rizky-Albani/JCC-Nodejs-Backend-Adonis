const res = require('express/lib/response')
const { Venues } = require('../models')

//realease 1
class VenueController {
    static async findAll(req, res){
        let venue = await Venues.findAll()
        res.status(200).json({status: "succes", data: venue})
    }

    static async store(req, res){
        let name = req.body.name
        let address = req.body.address
        let phone = req.body.phone
        //push
        const newVenue = await Venues.create({name: name, address: address, phone: phone})
        res.status(201).json({status: 'succses'})
    }

    static async show(req, res){
        let id = req.params.id
        let venue = await Venues.findByPk(id)

        res.status(200).json({ status: 'succes', data: venue})
    }

    static async update(req, res){
        let name = req.body.name
        let addres = req.body.address
        let phone = req.body.phone
        await Venues.update({
            name: name,
            addres: addres,
            phone: phone
        },{
            where:{
                id: req.params.id
            }
        })      

        res.status(200).json({status:'succes', data: "berhasil update!"})
    }

    static async destroy(req, res){
        await Venues.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({status:'succes', data: "berhasil hapus!"})
    }
}

module.exports = VenueController