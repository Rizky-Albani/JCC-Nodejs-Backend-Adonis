import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MovieValidator from 'App/Validators/MovieValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class MoviesController {
    public async index({response}: HttpContextContract){
        try{
            let movie = await Database.from('movies').select('id', 'tittle', 'resume', 'release_date')
            response.status(200).json({message: "success", data: movie})
        }catch(error){
            console.log(error)
        }
    }

    public async store({response, request}: HttpContextContract){
        try{
            await request.validate(MovieValidator);
            let newMovies = await Database.table('movies').returning('id').insert({
                tittle: request.input('tittle'),
                resume: request.input('resume'),
                release_date: request.input('release_date'),
            })
            response.created({message: 'created', newData: newMovies })
        }catch(error){
            console.log(error)
        }
    }

    public async show({params, response}: HttpContextContract){
        let movie = await Database.from('movies').where('id',params.id).select('id', 'tittle', 'resume', 'release_date').firstOrFail
        return response.status(200).json({message: "success", data: movie})
    }

    public async update({request, params, response}: HttpContextContract){
        let id = params.id
        let affectedRows = await Database.from('movies').where('id', id).update({
            tittle: request.input('tittle'),
            resume: request.input('resume'),
            release_date: request.input('release_date'),
        })
        response.ok({message: 'updated!', data: affectedRows})
    }

    public async destroy({params, response}: HttpContextContract){
        await Database.from('movies').where('id', params.id).delete()
 
        response.ok({message: 'deleted'})
    }
}
