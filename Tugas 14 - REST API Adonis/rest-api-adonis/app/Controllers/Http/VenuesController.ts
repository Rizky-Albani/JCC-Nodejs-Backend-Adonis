// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import VenueValidator from 'App/Validators/VenueValidator';
import Database from '@ioc:Adonis/Lucid/Database';
import Venue from 'App/Models/Venue';

export default class VenuesController {
    public async index({response, request, params}: HttpContextContract){
        try{
            //if(request.qs().name){
                //let name = request.qs().name
                //QBD
                //let venue = await Database.from('venues').select('id', 'name', 'address', 'phone').where('name', name)
                
                //Model
                //let venueFilteredName = await Venue.findBy('name', name)
                //let venueFilteredName = await Venue.query().preload('fields')
                //response.status(200).json({message: "success", data: venueFilteredName})
            //}
            //QBD
            //let venue = await Database.from('venues').select('id', 'name', 'address', 'phone')

            //Model

            let venue = await Venue.query().from('venues').preload('fields')
            response.status(200).json({message: "success", data: venue})
        }catch(error){
            console.log(error)
        }
    }
    
    public async store({response, request, auth}: HttpContextContract){
        try{
            await request.validate(VenueValidator);
            //QBD
            // let newVenue = await Database.table('venues').returning('id').insert({
            //     name: request.input('name'),
            //     address: request.input('address'),
            //     phone: request.input('phone'),
            // })

            //model
            let newVenue = new Venue();
            newVenue.name = request.input('name');
            newVenue.address = request.input('address')
            newVenue.phone = request.input('phone')
            await newVenue.save();

            response.created({message: 'created'})
        }catch(error){
            console.log(error)
        }
    }

    public async show({params, response}: HttpContextContract){
        //let venue = await Database.from('venues').where('id',params.id).select('id', 'name', 'address', 'phone').firstOrFail

        //let venue = await Venue.find(params)
        let venue = await Venue.query().where('id', params.id).from('venues').select('venues.id', 'venues.name', 'venues.address', 'venues.phone').preload('fields', (fieldQuery) => {
            fieldQuery.select("id", "name", "type")
        }).firstOrFail()
        //let venue = await Venue.query().where('id', params.id).orWhereNull('id').preload('fields')
        return response.status(200).json({message: "success", data: venue})
    }

    public async update({request, params, response}: HttpContextContract){
        let id = params.id
        // let affectedRows = await Database.from('venues').where('id', id).update({
        //     name: request.input('name'),
        //     address: request.input('address'),
        //     phone: request.input('phone'),
        // })

        let affectedRows = await Venue.findOrFail(id)
        affectedRows.name = request.input('name');
        affectedRows.address = request.input('address');
        affectedRows.phone = request.input('phone');

        affectedRows.save();

        response.ok({message: 'updated!', data: affectedRows})
    }

    public async destroy({params, response}: HttpContextContract){
        //await Database.from('venues').where('id', params.id).delete()

        let venue = await Venue.findOrFail(params.id)
        await venue.delete()
 
        response.ok({message: 'deleted'})
    }
}

//new commit