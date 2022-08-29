import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pegawais extends BaseSchema {
  protected tableName = 'pegawais'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('fullname').notNullable()
      table.string('phone_number').notNullable()
      table.text('address').notNullable()
      table.integer('user_id').defaultTo(null)
      table.integer('is_active').defaultTo(1)
      table.dateTime("deleted_at").defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
