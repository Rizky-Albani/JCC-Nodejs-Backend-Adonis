import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'
import { schema } from '@ioc:Adonis/Core/Validator'
import Mail from '@ioc:Adonis/Addons/Mail'
import Database from '@ioc:Adonis/Lucid/Database'

export default class AuthController {

    /**
    * @swagger
    * /api/v1/register:
    *   post:
    *    tags:
    *        - Authentication
    *    summary: Register Account
    *    description: Endpoint for register new user
    *    requestBody:
    *        content:
    *           application/x-www-form-urlencoded:
    *               schema:
    *                   $ref: '#/definitions/User'
    *           application/json:
    *               schema:
    *                   $ref: '#/definitions/User'
    *    responses:
    *       200:
    *         description: Silahkan lakukan verifikasi OTP yang telah dikiriimkan ke email anda!
    *       422:
    *         description: Failed, error.message 
    * 
    * /api/v1/otp-verification:
    *  post:
    *   tags:
    *     - Authentication
    *   summary: Verify Account
    *   description: Endpoint for verify account
    *   requestBody:
    *     content:
    *       application/x-www-form-urlencoded:
    *         schema:
    *           type: object
    *           properties:
    *             otp_code:
    *               type: string
    *               minLength: 6
    *               example: 123456
    *             email:
    *               type: string
    *               format: email
    *               example: mainbersama@gmail.com
    *           required:
    *             - otp_code
    *             - email
    *       application/json:
    *         schema:
    *           type: object
    *           properties:
    *             otp_code:
    *               type: string
    *               minLength: 6
    *               example: 123456
    *             email:
    *               type: string
    *               format: email
    *               example: mainbersama@gmail.com
    *           required:
    *             - otp_code
    *             - email
    *   responses:
    *       200:
    *         description: Silahkan lakukan verifikasi OTP yang telah dikiriimkan ke email anda!
    *       422:
    *         description: Failed, error.message
    * 
    * /api/v1/login:
    *  post:
    *   tags:
    *     - Authentication
    *   summary: Login
    *   description: Endpoint for login, return token if credential true
    *   requestBody:
    *     content:
    *       application/x-www-form-urlencoded:
    *         schema:
    *           type: object
    *           properties:
    *             email:
    *               type: string
    *               format: email
    *               example: mainbersama@gmail.com
    *             password:
    *               type: string
    *               example: mainbersama123
    *           required:
    *             - email
    *             - password
    *       application/json:
    *         schema:
    *           type: object
    *           properties:
    *             email:
    *               type: string
    *               format: email
    *               example: mainbersama@gmail.com
    *             password:
    *               type: string
    *               example: mainbersama123
    *           required:
    *             - email
    *             - password
    *   responses:
    *       200:
    *         description: Berhasil Logi!, token
    *       422:
    *         description: Failed, error.message      
    * 
    */

    public async register({request, response}: HttpContextContract){
        try{
            const palyload = await request.validate(UserValidator)
            const newUser = await User.create({
                name: palyload.name,
                email: palyload.email,
                password: palyload.password,
                role: request.input('role')
            })

            let otp_code: number = Math.floor(100000+Math.random()*900000)
            await Database.table('otp_codes').insert({otp_code: otp_code, user_id: newUser.id})
            await Mail.send((message) => {
                message
                  .from('facdc7a36df4ca')
                  .to(palyload.email)
                  .subject('Welcome Onboard!')
                  .htmlView('email/otp_verification', { name: palyload.name , otp_code: otp_code})
              })

            response.created({message: 'Silahkan lakukan verifikasi OTP yang telah dikiriimkan ke email anda!'})
        }catch(error){
            response.badRequest({meesage: 'Failed', error})
        }
    }

    public async login({request, response, auth}: HttpContextContract){
        try{
            const useSchema = schema.create({
                email: schema.string(),
                password: schema.string()
            })

            await request.validate({ schema: useSchema})
            const email = request.input('email');
            const password = request.input('password');

            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '1days'
            })
            response.ok({message: 'Login Succes', token})
        }catch (error){
            if(error.guard){
                response.badRequest({message: error.message})
            }
            response.badRequest({error})
        }
    }

    public async logout({auth}: HttpContextContract){
        await auth.use('api').revoke()
        return {
        revoked: true
        }
    }

    public async otp_verification({request, response}: HttpContextContract){
        try{
            const otp_code = request.input('otp_code')
            const email = request.input('email')

            const user = await User.findByOrFail('email', email)

            const dataOtp = await Database.from('otp_codes').where('otp_code', otp_code).firstOrFail()
            if(user.id == dataOtp.user_id){
                user.isVerified = true
                await user.save()

                response.ok({message: 'Berhasil di verifikasi!'})
            }

            
        }catch (error){
            response.badRequest({error})
        }
    }
}
