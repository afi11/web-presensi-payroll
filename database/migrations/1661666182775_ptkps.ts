import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ptkps extends BaseSchema {
  protected tableName = 'ptkps'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('kode').defaultTo(null)
      table.integer('amount').defaultTo(0)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
