import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TempatPresensis extends BaseSchema {
  protected tableName = 'tempat_presensis'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('place_name').defaultTo(null)
      table.string('qr_code').defaultTo(null)
      table.string('latitude').defaultTo(null)
      table.string('longitude').defaultTo(null)
      table.integer('is_active').defaultTo(1)
      table.dateTime("deleted_at").defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
