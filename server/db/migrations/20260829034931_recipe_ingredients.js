/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('recipe_ingredients', (table) => {
    table.increments('id').primary()
    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
    table.string('quantity')
    table.string('unit')
    table.string('ingredient').notNullable()
    table.string('preparation')
    table.integer('display_order').notNullable()
  })
}

export async function down(knex) {
  return knex.schema.dropTable('recipe_ingredients')
}
