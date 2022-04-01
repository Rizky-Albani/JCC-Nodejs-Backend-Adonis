import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BookingValidator from 'App/Validators/BookingValidator'
import Booking from 'App/Models/Booking'
import Field from 'App/Models/Field';

export default class BookingsController {
    public async store({response, request, params}: HttpContextContract){
        try{


            const field = await Field.findByOrFail('id', params.field_id)
            const play_date_start = request.input('play_date_start');
            const play_date_end = request.input('play_date_end')
            const newBooking = await field?.related('bookings').create({ play_date_start, play_date_end });

            await newBooking.save();

            response.created({message: 'berhasil booking'})
        }catch(error){
            console.log(error)
            response.badRequest({message: error.message})
        }
    }

    public async show({params, response}: HttpContextContract){
        let booking = await Booking.query().where('id', params.id).orWhereNull('id')
        return response.status(200).json({message: "berhasil get data booking by id", data: booking})
    }
}
