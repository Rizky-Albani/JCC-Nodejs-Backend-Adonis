import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Movies extends BaseSchema {
  protected tableName = 'movies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('tittle').notNullable()
      table.text('resume').notNullable()
      table.dateTime('release_date').notNullable()
      table.integer('genre_id').unsigned().references('id').inTable('genres').onUpdate('NO ACTION').onDelete('SET NULL')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
