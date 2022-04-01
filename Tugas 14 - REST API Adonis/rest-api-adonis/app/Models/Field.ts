import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Venue from './Venue'
import Booking from './Booking'

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
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Booking)
  public bookings: HasMany<typeof Booking>
}
