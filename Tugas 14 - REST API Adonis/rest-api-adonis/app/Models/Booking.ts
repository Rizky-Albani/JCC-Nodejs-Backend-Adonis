import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, manyToMany, ManyToMany, computed } from '@ioc:Adonis/Lucid/Orm'
import Field from './Field'
import User from './User'

export default class Booking extends BaseModel {
  public searizeExtras = true

  @computed()
  public get players_count(){
    return this.player.length
  }

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


}
