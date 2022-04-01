import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class AuthController {
    public async register({request, response}: HttpContextContract){
        try{
            const data = await request.validate(UserValidator)

            const newUser = await User.create(data)

            response.created({message: 'reggistered!'})
        }catch(error){
            response.unprocessableEntity({message: error.message})
        }
    }

    public async login({request, response, auth}: HttpContextContract){
        try{
            const useSchema = schema.create({
                email: schema.string(),
                password: schema.string()
            })

            const payload = await request.validate({ schema: useSchema})
            const email = request.input('email');
            const password = request.input('password');

            const token = await auth.use('api').attempt(email, password)
            response.ok({message: 'Login Succes', token})
        }catch (error){
            if(error.guard){
                response.badRequest({message: error.message})
            }
            response.badRequest({error})
        }
    }
}
