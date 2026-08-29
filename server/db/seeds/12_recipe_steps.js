/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('recipe_steps').del()
  await knex('recipe_steps').insert([
    { id: 1, recipe_id: 'rowValue1', step_number: '', instruction: '' },
    { id: 2, recipe_id: 'rowValue2', step_number: '', instruction: '' },
    { id: 3, recipe_id: 'rowValue3', step_number: '', instruction: '' },
  ])
}
