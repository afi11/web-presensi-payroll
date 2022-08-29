import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Presensis extends BaseSchema {
  protected tableName = 'presensis'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pegawai_id').defaultTo(null)
      table.integer('waktu_presensi_id').defaultTo(null)
      table.integer('tempat_presensi_id').defaultTo(null)
      table.date('presence_at').defaultTo(null)
      table.time('check_in').defaultTo(null)
      table.time('check_out').defaultTo(null)
      table.string('latitude').defaultTo(null)
      table.string('longitude').defaultTo(null)
      table.string('distance').defaultTo(null)
      table.integer('rule_telat_check_in').defaultTo(null)
      table.integer('rule_telat_check_out').defaultTo(null)
      table.integer('status_presence').defaultTo(0)
      table.dateTime("deleted_at").defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
