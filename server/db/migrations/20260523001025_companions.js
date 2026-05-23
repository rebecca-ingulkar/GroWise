/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('companions', (table) => {
    table.increments('id')
    table.integer('plant_id')
    table.integer('companion_plant_id')
    table.string('compatibility_type')
    table.string('notes')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('companions')
}
