import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StatusWaktuKerjas extends BaseSchema {
  protected tableName = 'status_waktu_kerjas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pegawai_id').defaultTo(null)
      table.integer('shift_id').defaultTo(null)
      table.integer('is_active').defaultTo(1)
      table.dateTime("deleted_at").defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
