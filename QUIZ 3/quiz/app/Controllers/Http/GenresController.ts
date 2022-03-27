import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GenreValidator from 'App/Validators/GenreValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class GenresController {
    public async index({response}: HttpContextContract){
        try{
            let genre = await Database.from('genres').select('id', 'name')
            response.status(200).json({message: "success", data: genre})
        }catch(error){
            console.log(error)
        }
    }

    public async store({response, request}: HttpContextContract){
        try{
            await request.validate(GenreValidator);
            let newGenre = await Database.table('genres').returning('id').insert({
                name: request.input('tittle'),
            })
            response.created({message: 'created', newData: newGenre })
        }catch(error){
            console.log(error)
        }
    }

    public async show({params, response}: HttpContextContract){
        let genre = await Database.from('genres').where('id',params.id).select('id', 'name').firstOrFail
        return response.status(200).json({message: "success", data: genre})
    }

    public async update({request, params, response}: HttpContextContract){
        let id = params.id
        let affectedRows = await Database.from('genres').where('id', id).update({
            name: request.input('name'),
        })
        response.ok({message: 'updated!', data: affectedRows})
    }

    public async destroy({params, response}: HttpContextContract){
        await Database.from('genres').where('id', params.id).delete()
 
        response.ok({message: 'deleted'})
    }
}
