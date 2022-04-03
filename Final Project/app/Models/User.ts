import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Booking from './Booking'

/**
  * @swagger
  * definitions:
  *   User:
  *     type: object
  *     properties:
  *       name:
  *         type: string
  *         minLength: 6
  *         example: Main Bersama
  *       email:
  *         type: string
  *         format: email
  *         example: mainbersama@gmail.com
  *       password:
  *         type: integer
  *         minLength: 6
  *         example: mainbersama123
  *       role:
  *         type: enum
  *       enum:
  *         - user
  *         - owner
  *     required:
  *      - name
  *      - email
  *      - password
  *      - role
  */

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public role: string

  @column()
  public isVerified: boolean

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasMany(() => Booking)
  public myBooking: HasMany <typeof Booking>

}
