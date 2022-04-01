import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BookingsUser extends BaseSchema {
  protected tableName = 'bookings_user'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('booking_id').unsigned().references('bookings.id')
      table.integer('user_id').unsigned().references('users.id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
