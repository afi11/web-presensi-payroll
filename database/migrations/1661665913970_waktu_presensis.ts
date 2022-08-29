import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class WaktuPresensis extends BaseSchema {
  protected tableName = 'waktu_presensis'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('day').defaultTo(null)
      table.time("check_in").defaultTo(null)
      table.time("check_out").defaultTo(null)
      table.integer('shift_id').defaultTo(null)
      table.dateTime("deleted_at").defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
