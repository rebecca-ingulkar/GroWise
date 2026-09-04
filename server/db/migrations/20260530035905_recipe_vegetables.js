/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('recipe_vegetables', (table) => {
    table.integer('id').primary()
    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')

    table
      .integer('vegetable_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('vegetables')
      .onDelete('CASCADE')
    table.unique(['recipe_id', 'vegetable_id'])
  })
}

export async function down(knex) {
  return knex.schema.dropTable('recipe_vegetables')
}
