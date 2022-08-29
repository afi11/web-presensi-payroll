import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Shifts extends BaseSchema {
  protected tableName = 'shifts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').unique().notNullable()
      table.integer('is_active').defaultTo(1)
      table.dateTime("deleted_at").defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
