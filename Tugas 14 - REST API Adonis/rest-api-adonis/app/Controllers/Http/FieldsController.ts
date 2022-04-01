import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Field from 'App/Models/Field'
import FieldValidator from 'App/Validators/FieldValidator'
import Venue from 'App/Models/Venue'

export default class FieldsController {
    public async index({response}: HttpContextContract){
        try{
            let field = await Field.query().preload('venue')

            response.status(200).json({message: "success", data: field})
        }catch(error){
            console.log(error)
        }
    }
    
    public async store({response, request, params}: HttpContextContract){
        try{
            await request.validate(FieldValidator);
            // let newField = await Database.table('fields').returning('id').insert({
            //     name: request.input('name'),
            //     type: request.input('type'),
            //     venue_id: request.input('venue_id'),
            // })

            const venue = await Venue.findByOrFail('id', params.venue_id)
            const name = request.input('name');
            const type = request.input('type');
            const newField = await venue?.related('fields').create({ name, type });

            await newField.save();
            response.created({message: 'berhasil menambahkan data field baru'})
        }catch(error){
            console.log(error)
        }
    }

    public async show({params, response}: HttpContextContract){
        //let field = await Database.from('fields').where('id',params.id).select('id', 'name', 'type', 'venue_id').firstOrFail
        //let field = await Field.find(params)
        let field = await Field.query().where('id', params.id).orWhereNull('id').preload('venue', (venueQuery) => {
            venueQuery.select('name', 'address', 'phone')
        }).preload('bookings', (bookingQuery) => {
            bookingQuery.select('id', 'play_date_start', 'play_date_end')
        }).firstOrFail()
        return response.status(200).json({message: "berhasil get data booking", data: field})
    }

    public async update({request, params, response}: HttpContextContract){
        let id = params.id
        // let affectedRows = await Database.from('fields').where('id', id).update({
        //     name: request.input('name'),
        //     type: request.input('type'),
        //     venue_id: request.input('venue_id'),
        // })

        let affectedRows = await Field.findOrFail(id)
        affectedRows.name = request.input('name');
        affectedRows.type = request.input('type');

        affectedRows.save();
        response.ok({message: 'updated!', data: affectedRows})
    }

    public async destroy({params, response}: HttpContextContract){
        //await Database.from('fields').where('id', params.id).delete()
        
        let field = await Field.findOrFail(params.id)
        await field.delete()
        response.ok({message: 'deleted'})
    }
}
