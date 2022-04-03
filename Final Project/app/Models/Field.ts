import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Venue from './Venue'
import Booking from './Booking'

  /**
    * @swagger
    * definitions:
    *  Field:
    *   type: object
    *   properties:
    *    name:
    *     type: string
    *     example: Lapangan Soccer A
    *    type:
    *     type: string
    *     enum:
    *       - soccer
    *       - minisoccer
    *       - futsal
    *       - basketball
    *       - volleyball
    *   required:
    *    - name
    *    - type
    */ 

export default class Field extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public type: Array<string> = ['futsal', 'mini soccer', 'basketball' ]

  @column()
  public venueId: number
  
  @belongsTo(() => Venue)
  public venue: BelongsTo<typeof Venue>
  
  @column.dateTime({ autoCreate: true , serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true , serializeAs: null})
  public updatedAt: DateTime

  @hasMany(() => Booking)
  public bookings: HasMany<typeof Booking>
}
