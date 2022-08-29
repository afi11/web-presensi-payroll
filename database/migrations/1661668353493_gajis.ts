import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Gajis extends BaseSchema {
  protected tableName = 'gajis'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pegawai_id').defaultTo(null)
      table.integer('gaji_pokok_id').defaultTo(null)
      table.integer('riwayat_pegawai_id').defaultTo(null)
      table.integer('jumlah_hari_kerja').defaultTo(null)
      table.string('biaya_jabatan').defaultTo(null)
      table.string('amount_ptkp').defaultTo(null)
      table.string('wage_per_year').defaultTo(null)
      table.string('pph_21_per_tahun').defaultTo(null)
      table.string('pph_21_per_bulan').defaultTo(null)
      table.string('amount_salary').defaultTo(null)
      table.integer('ptkp_id').defaultTo(null)
      table.date('released_at').defaultTo(null)
      table.dateTime("deleted_at").defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
