import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BookingValidator from 'App/Validators/BookingValidator'
import Booking from 'App/Models/Booking'
import Field from 'App/Models/Field';

export default class BookingsController {

    /**
    * @swagger
    * /api/v1/bookings:
    *  get:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Booking
    *   summary: Get all bookings data
    *   description: Endpoint for get all bookings
    *   parameters:
    *     - in: query
    *       name: venue_id
    *       required: false
    *       schema:
    *         type: integer
    *       description: venue ID
    *     - in: query
    *       name: start_date
    *       required: false
    *       schema:
    *         type: string
    *         format: date
    *       description: star date of booking
    *     - in: query
    *       name: end_date
    *       required: false
    *       schema:
    *         type: string
    *         format: date
    *       description: end date of booking
    *   responses:
    *     '200':
    *       description: berhasil get data booking
    *     '400':
    *       description: Invalid Request
    *     'Unauthorized access':
    *       description: Pake token user!
    * 
    * /api/v1/bookings/{id}:
    *  get:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Booking
    *   summary: Get booking data by ID
    *   description: Endpoint for get detail booking
    *   parameters:
    *     - in: path
    *       name: id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The Booking ID
    *   responses:
    *     '200':
    *       description: berhasil get data booking by id
    *     '400':
    *       description: Invalid Request
    *     'Unauthorized access':
    *       description: Pake token user!
    * 
    * /api/v1/bookings/{id}/join:
    *  put:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Booking
    *   summary: Player Join
    *   description: Endpoint for join booking
    *   parameters:
    *     - in: path
    *       name: id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The Booking ID
    *   responses:
    *     '200':
    *       description: Berhasil join!
    *     'Unauthorized access':
    *       description: Pake token user!
    * 
    * /api/v1/bookings/{id}/unjoin:
    *  put:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Booking
    *   summary: Player Unjoin
    *   description: Endpoint for unjoin booking
    *   parameters:
    *     - in: path
    *       name: id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The Booking ID
    *   responses:
    *     '200':
    *       description: Success unjoin booking
    *     'Unauthorized access':
    *       description: Pake token user!
    *     '422':
    *       description: Failed, you haven't joined yet
    * 
    * /api/v1/schedule:
    *  get:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Booking
    *   summary: Get Schedule
    *   description: Endpoint for get schedule user who login
    *   responses:
    *     '200':
    *       description: Berhasil get data Schedule
    *     'Unauthorized access':
    *       description: Pake token user!
    * 
    * /api/v1/fields/{id}/bookings:
    *  post:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Field
    *   summary: New Booking
    *   description: Endpoint for booking field
    *   parameters:
    *     - in: path
    *       name: id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The field ID
    *   requestBody:
    *     content:
    *       application/x-www-form-urlencoded:
    *         schema:
    *           $ref: '#/definitions/Booking'
    *       application/json:
    *         schema:
    *           $ref: '#/definitions/Booking'
    *   responses:
    *     '200':
    *       description: Success create booking
    *     '401':
    *       description: Only user can access this route
    */

    public async index({response}: HttpContextContract){
        try{
            let booking = await Booking.query().withCount('player', (query) =>{
                query.as('players_count')
            }).preload('player', (playerQuery) => {
            playerQuery.select('id', 'name', 'email')
        })

        response.status(200).json({message: "berhasil get data booking", data: booking})
        }catch (error){
            response.badGateway({message: 'hanya users!' , error})
        }

        
    }

    public async store({response, request, params, auth}: HttpContextContract){
        try{
            await request.validate(BookingValidator);
            const user = auth.user!
            const field = await Field.findByOrFail('id', params.field_id)
            const playDateStart = request.input('play_date_start');
            const playDateEnd = request.input('play_date_end')
            const newBooking = await field?.related('bookings').create({ playDateStart, playDateEnd });
            user.related('myBooking').save(newBooking)
            await newBooking.save();

            response.created({message: 'berhasil booking'})
        }catch(error){
            console.log(error)
            response.badRequest({message: error.message})
        }
    }

    public async show({params, response}: HttpContextContract){
        let booking = await Booking.query().withCount('player', (query) => {
            query.as('players_count')
        }).where('id', params.id).orWhereNull('id').preload('player', (playerQuery) => {
            playerQuery.select('id', 'name', 'email')
        })

        return response.status(200).json({message: "berhasil get data booking by id", data: booking})
    }

    public async join({response, params, auth}){
        try{
            const booking = await Booking.findOrFail(params.id)
            let user = auth.user!

            await booking.related('player').attach([user.id])
            response.ok({message:'berhasil join booking'})
        }catch (error){
            console.log(error)
        }
    }

    public async unjoin({response, params, auth}){
        try{
            const booking = await Booking.findOrFail(params.id)
            let user = auth.user!

            await booking.related('player').detach([user.id])
            response.ok({message:'berhasil unjoin!'})
        }catch (error){
            response.badRequest({message: error.message})
        }
    }

    public async schedule({response}: HttpContextContract){
        let booking = await Booking.query().preload('player', (playerQuery) => {
            playerQuery.select('id', 'name', 'email')
        })

        return response.status(200).json({message: "berhasil get data schedule", data: booking})
    }
}
