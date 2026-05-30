/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id')
    table.string('title')
    table.string('description')
    table.string('ingredients')
    table.string('method')
    table.string('notes')
    table.string('image')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('recipes')
}
