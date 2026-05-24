/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('companions', (table) => {
    table.increments('id')

    table
      .integer('plant_id')
      .unsigned()
      .references('id')
      .inTable('vegetables')
      .onDelete('CASCADE')

    table
      .integer('companion_plant_id')
      .unsigned()
      .references('id')
      .inTable('vegetables')
      .onDelete('CASCADE')

    table.string('compatibility_type')

    table.text('notes')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('companions')
}
