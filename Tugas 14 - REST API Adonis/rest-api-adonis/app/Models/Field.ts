import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Venue from './Venue'

export default class Field extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public type: Array<string> = ['futsal', 'mini soccer', 'basketball' ]

  @hasMany(() => Venue, {
    foreignKey: 'authorId', // defaults to userId
  })
  public venue_id: HasMany<typeof Venue>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
