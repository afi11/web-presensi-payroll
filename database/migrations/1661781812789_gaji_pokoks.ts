import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GajiPokoks extends BaseSchema {
  protected tableName = 'gaji_pokoks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('jabatan_id').defaultTo(null)
      table.string('amount').defaultTo(null)
      table.integer('is_active').defaultTo(1)
      table.dateTime("deleted_at").defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
