import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Field from './Field'

/**
  * @swagger
  * definitions:
  *  Venue:
  *   type: object
  *   properties:
  *     name:
  *       type: string
  *       example: Dariza Sports
  *     address:
  *       type: string
  *       example: JL. Cempaka 4 Blok T 28 No. 100
  *     phone:
  *       type: string
  *       example: '089530107193'
  *   required:
  *     - name
  *     - address
  *     - phone
  */ 

export default class Venue extends BaseModel {
  @hasMany(() => Field)
  public fields: HasMany<typeof Field>
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public address: string

  @column()
  public phone: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
