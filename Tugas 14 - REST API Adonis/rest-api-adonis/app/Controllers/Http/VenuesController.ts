// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import VenueValidator from 'App/Validators/VenueValidator';
import Database from '@ioc:Adonis/Lucid/Database';
import { Request } from '@adonisjs/core/build/standalone';

export default class VenuesController {
    public async index({response}: HttpContextContract){
        try{
            let venue = await Database.from('venues').select('id', 'name', 'address', 'phone')
            response.status(200).json({message: "success", data: venue})
        }catch(error){
            console.log(error)
        }
    }
    
    public async store({response, request}: HttpContextContract){
        try{
            await request.validate(VenueValidator);
            let newVenue = await Database.table('venues').returning('id').insert({
                name: request.input('name'),
                address: request.input('address'),
                phone: request.input('phone'),
            })
            response.created({message: 'created', newVenues: newVenue})
        }catch(error){
            console.log(error)
        }
    }

    public async show({params, response}: HttpContextContract){
        let venue = await Database.from('venues').where('id',params.id).select('id', 'name', 'address', 'phone').firstOrFail
        return response.status(200).json({message: "success", data: venue})
    }

    public async update({request, params, response}: HttpContextContract){
        let id = params.id
        let affectedRows = await Database.from('venues').where('id', id).update({
            name: request.input('name'),
            address: request.input('address'),
            phone: request.input('phone'),
        })
        response.ok({message: 'updated!', data: affectedRows})
    }

    public async destroy({params, response}: HttpContextContract){
        await Database.from('venues').where('id', params.id).delete()
 
        response.ok({message: 'deleted'})
    }
}

//new commit