import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Field from './Field'

export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public play_date_start: DateTime

  @column()
  public play_date_end: string

  @column()
  public fieldId: number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Field)
  public fields: BelongsTo<typeof Field>
}
