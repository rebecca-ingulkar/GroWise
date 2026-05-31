/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('recipe_vegetables', (table) => {
    table.increments('id')
    table.integer('recipe_id')
    table.integer('vegetable_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('recipe_vegetables')
}
