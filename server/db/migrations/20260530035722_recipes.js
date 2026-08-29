/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('description')
    table.string('notes')
    table.string('image')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('recipes')
}
