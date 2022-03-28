import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import FieldValidator from 'App/Validators/FieldValidator'

export default class FieldsController {
    public async index({response}: HttpContextContract){
        try{
            let field = await Database.from('fields').select('id', 'name', 'type', 'venue_id')
            response.status(200).json({message: "success", data: field})
        }catch(error){
            console.log(error)
        }
    }
    
    public async store({response, request}: HttpContextContract){
        try{
            await request.validate(FieldValidator);
            let newField = await Database.table('fields').returning('id').insert({
                name: request.input('name'),
                type: request.input('rype'),
                venue_id: request.input('venue_id'),
            })
            response.created({message: 'created', newVenues: newField})
        }catch(error){
            console.log(error)
        }
    }

    public async show({params, response}: HttpContextContract){
        let field = await Database.from('fields').where('id',params.id).select('id', 'name', 'type', 'venue_id').firstOrFail
        return response.status(200).json({message: "success", data: field})
    }

    public async update({request, params, response}: HttpContextContract){
        let id = params.id
        let affectedRows = await Database.from('fields').where('id', id).update({
            name: request.input('name'),
            type: request.input('type'),
            venue_id: request.input('venue_id'),
        })
        response.ok({message: 'updated!', data: affectedRows})
    }

    public async destroy({params, response}: HttpContextContract){
        await Database.from('fields').where('id', params.id).delete()
 
        response.ok({message: 'deleted'})
    }
}
