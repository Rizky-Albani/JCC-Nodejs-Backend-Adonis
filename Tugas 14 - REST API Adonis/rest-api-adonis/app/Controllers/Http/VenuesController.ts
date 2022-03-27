// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class VenuesController {
    public async store({response, request}: HttpContextContract){
        const newVenueSchema = schema.create({
            nama: schema.string(),
            alamat: schema.string(),
            phone: schema.string({}, [
                rules.mobile({
                    locales: ['id-ID']
                })
            ])
        })
        const payload = await request.validate({ schema: newVenueSchema })
        return response.ok({message: "berhasil", data: payload})
    }

    public async stores({response, request}: HttpContextContract){
        const newVenueSchema = schema.create({
            nama: schema.string(),
            namaVenue: schema.string(),
            date: schema.date({}, [
                rules.after('today')
            ])
        })
        const payload = await request.validate({ schema: newVenueSchema })
        return response.ok({message: "berhasil", data: payload})
    }
}
