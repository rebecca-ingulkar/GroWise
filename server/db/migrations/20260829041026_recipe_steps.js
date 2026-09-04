/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('recipe_steps', (table) => {
    table.increments('id').primary()
    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')

    table.integer('step_number').notNullable()
    table.string('instruction').notNullable()
  })
}

export async function down(knex) {
  return knex.schema.dropTable('recipe_steps')
}
