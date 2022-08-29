import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RiwayatPegawais extends BaseSchema {
  protected tableName = 'riwayat_pegawais'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pegawai_id').defaultTo(null)
      table.integer('jabatan_id').notNullable()
      table.string('pendidikan').defaultTo(null)
      table.string('university').defaultTo(null)
      table.integer('year_graduation').defaultTo(null)
      table.integer('merried').defaultTo(0)
      table.integer('is_wife_work').defaultTo(0)
      table.integer('has_children').defaultTo(0)
      table.integer('number_of_children').defaultTo(0)
      table.integer('is_active').defaultTo(1)
      table.dateTime("deleted_at").defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
