import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RuleTelats extends BaseSchema {
  protected tableName = 'rule_telats'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('rule').defaultTo(null)
      table.integer('late_in').defaultTo(null)
      table.string('type').defaultTo(null)
      table.integer('is_active').defaultTo(1)
      table.dateTime("deleted_at").defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
