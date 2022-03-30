import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Field from 'App/Models/Field'
import FieldValidator from 'App/Validators/FieldValidator'

export default class FieldsController {
    public async index({response}: HttpContextContract){
        try{
            //let field = await Database.from('fields').select('id', 'name', 'type', 'venue_id')

            let field = await Field.all()
            response.status(200).json({message: "success", data: field})
        }catch(error){
            console.log(error)
        }
    }
    
    public async store({response, request}: HttpContextContract){
        try{
            await request.validate(FieldValidator);
            // let newField = await Database.table('fields').returning('id').insert({
            //     name: request.input('name'),
            //     type: request.input('type'),
            //     venue_id: request.input('venue_id'),
            // })

            let newField = new Field();
            newField.name = request.input('name');
            newField.type = request.input('type')
            newField.venue_id = request.input('venue_id')

            await newField.save();
            response.created({message: 'created', newVenues: newField})
        }catch(error){
            console.log(error)
        }
    }

    public async show({params, response}: HttpContextContract){
        //let field = await Database.from('fields').where('id',params.id).select('id', 'name', 'type', 'venue_id').firstOrFail
        let field = await Field.find(params)
        return response.status(200).json({message: "success", data: field})
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
        affectedRows.venue_id = request.input('venue_id');

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
