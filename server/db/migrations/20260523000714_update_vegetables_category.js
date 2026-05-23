/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.table('vegetables', (table) => {
    table.integer('category_id')
  })
}

export async function down(knex) {
  return knex.schema.table('vegetables', (table) => {
    table.dropColumn('category_id')
  })
}
