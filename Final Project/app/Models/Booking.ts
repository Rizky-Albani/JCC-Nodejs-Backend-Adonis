import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, manyToMany, ManyToMany, computed } from '@ioc:Adonis/Lucid/Orm'
import Field from './Field'
import User from './User'

/**
  * @swagger
  * definitions:
  *   Booking:
  *     type: object
  *     properties:
  *       play_date_start:
  *         type: string
  *         format: date
  *         example: '2022-04-04T15:00:00'
  *       play_date_end:
  *         type: string
  *         format: date
  *         example: '2022-04-04T16:00:00'
  *     required:
  *       - play_date_start
  *       - play_date_end
  */

export default class Booking extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public playDateStart: DateTime

  @column()
  public playDateEnd: DateTime

  @column()
  public fieldId: number

  @column()
  public userId: number
  
  @column.dateTime({ autoCreate: true , serializeAs:null})
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true , serializeAs:null })
  public updatedAt: DateTime

  @belongsTo(() => Field)
  public fields: BelongsTo<typeof Field>

  @belongsTo(() => User)
  public bookingUser: BelongsTo<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'bookings_user'
  })
  public player: ManyToMany<typeof User>

  @computed()
  public get players_count(){
    return this.$extras.players_count
  }
}
