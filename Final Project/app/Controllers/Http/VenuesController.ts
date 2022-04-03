// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import VenueValidator from 'App/Validators/VenueValidator';
import Venue from 'App/Models/Venue';

export default class VenuesController {

    /**
    * @swagger
    * /api/v1/venues:
    *  get:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Venue
    *   summary: Get all data venue
    *   description: Endpoint for get all venue
    *   parameters:
    *     - in: query
    *       name: type
    *       required: false
    *       schema:
    *         type: string
    *         enum:
    *           - soccer
    *           - minisoccer
    *           - futsal
    *           - basketball
    *           - volleyball
    *       description: type of field
    *   responses:
    *     '200':
    *       description: Success get all data venues
    *     '400':
    *       description: Hanya owner venue yang dapat mengakses ini!
    *  post:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Venue
    *   summary: Add new venue
    *   description: Endpoint for create venue
    *   requestBody:
    *     content:
    *       application/x-www-form-urlencoded:
    *         schema:
    *           $ref: '#/definitions/Venue'
    *       application/json:
    *         schema:
    *           $ref: '#/definitions/Venue'
    *   responses:
    *     '200':
    *       description: Venue added successfully
    *     '401':
    *       description: Invalid Request
    *     '400':
    *       description: Hanya owner venue yang dapat mengakses ini!
    *
    * /api/v1/venues/{id}:
    *  get:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Venue
    *   summary: Get venue data by ID
    *   description: Endpoint for get detail venue
    *   parameters:
    *     - in: path
    *       name: id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The venue ID
    *   responses:
    *     '200':
    *       description: Success get detail data venue
    *     '400':
    *       description: Hanya owner venue yang dapat mengakses ini!
    *  put:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Venue
    *   summary: Update data venue
    *   description: Endpoint for update venue
    *   parameters:
    *     - in: path
    *       name: id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The venue ID
    *   requestBody:
    *     content:
    *       application/x-www-form-urlencoded:
    *         schema:
    *           $ref: '#/definitions/Venue'
    *       application/json:
    *         schema:
    *           $ref: '#/definitions/Venue'
    *   responses:
    *     '200':
    *       description: Venue updated successfully
    *     '400':
    *       description: Hanya owner venue yang dapat mengakses ini!
    * 
    *  delete:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Venue
    *   summary: Delete data venue by ID
    *   description: Endpoint for delete venue
    *   parameters:
    *     - in: path
    *       name: id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The venue ID
    *   responses:
    *     '200':
    *       description: Venue deleted successfully
    *     '400':
    *       description: Hanya owner venue yang dapat mengakses ini!
    * 
    * /api/v1/venues/{venue_id}/fields:
    *  get:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Venue
    *   summary: Get data field by venue ID
    *   description: Endpoint for get all field by venue id
    *   parameters:
    *     - in: path
    *       name: venue_id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The venue ID
    *   responses:
    *     '200':
    *       description: Success get all data fields by venue_id
    *     '400':
    *       description: Hanya owner venue yang dapat mengakses ini!
    * 
    *  post:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Venue
    *   summary: Add new field
    *   description: Endpoint for add field
    *   parameters:
    *     - in: path
    *       name: venue_id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The venue ID
    *   requestBody:
    *     content:
    *       application/x-www-form-urlencoded:
    *         schema:
    *           $ref: '#/definitions/Field'
    *       application/json:
    *         schema:
    *           $ref: '#/definitions/Field'
    *   responses:
    *     '200':
    *       description: Field added successfully
    *     '400':
    *       description: Hanya owner venue yang dapat mengakses ini!
    * /api/v1/venues/{venue_id}/fields/{id}:
    *  get:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Venue
    *   summary: Get data field by venue id and field id
    *   description: Get detail data field by venue id
    *   parameters:
    *     - in: path
    *       name: venue_id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The venue ID
    *     - in: path
    *       name: id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The field ID
    *   responses:
    *     '200':
    *       description: Success get detail data field
    *     '400':
    *       description: Hanya owner venue yang dapat mengakses ini!
    *  put:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Venue
    *   summary: Update data field
    *   description: Endpoint for update data field
    *   parameters:
    *     - in: path
    *       name: venue_id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The venue ID
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
    *           $ref: '#/definitions/Field'
    *       application/json:
    *         schema:
    *           $ref: '#/definitions/Field'
    *   responses:
    *     '200':
    *       description: Field updated successfully
    *     '400':
    *       description: Hanya owner venue yang dapat mengakses ini!
    *  delete:
    *   security:
    *     - bearerAuth: []
    *   tags:
    *     - Venue
    *   summary: Delete data field by ID
    *   description: Endpoint for delete field
    *   parameters:
    *     - in: path
    *       name: venue_id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The venue ID
    *     - in: path
    *       name: id
    *       required: true
    *       schema:
    *         type: integer
    *         minimum: 1
    *         example: 1
    *       description: The field ID
    *   responses:
    *     '200':
    *       description: Field deleted successfully
    *     '400':
    *       description: Hanya owner venue yang dapat mengakses ini!
    *
    */ 

    public async index({response}: HttpContextContract){
        try{
            let venue = await Venue.query().from('venues').preload('fields')
            response.status(200).json({message: "success", data: venue})
        }catch(error){
            console.log(error)
        }
    }
    
    public async store({response, request}: HttpContextContract){
        try{
            await request.validate(VenueValidator);

            let newVenue = new Venue();
            newVenue.name = request.input('name');
            newVenue.address = request.input('address')
            newVenue.phone = request.input('phone')
            await newVenue.save();

            response.created({message: 'Berhasil membuat venue!'})
        }catch(error){
            console.log(error)
        }
    }

    public async show({params, response}: HttpContextContract){

        let venue = await Venue.query().where('id', params.id).from('venues').select('venues.id', 'venues.name', 'venues.address', 'venues.phone').preload('fields', (fieldQuery) => {
            fieldQuery.select("id", "name", "type")
        }).firstOrFail()

        return response.status(200).json({message: "success", data: venue})
    }

    public async update({request, params, response}: HttpContextContract){
        let id = params.id

        let affectedRows = await Venue.findOrFail(id)
        affectedRows.name = request.input('name');
        affectedRows.address = request.input('address');
        affectedRows.phone = request.input('phone');

        affectedRows.save();

        response.ok({message: 'updated!', data: affectedRows})
    }

    public async destroy({params, response}: HttpContextContract){

        let venue = await Venue.findOrFail(params.id)
        await venue.delete()
 
        response.ok({message: 'deleted'})
    }
}
