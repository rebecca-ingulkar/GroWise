/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('recipe_ingredients').del()
  await knex('recipe_ingredients').insert([
    {
      id: 1,
      recipe_id: 'rowValue1',
      quantity: '',
      unit: '',
      ingredient: '',
      preparation: '',
      display_order: '',
    },
    {
      id: 2,
      recipe_id: 'rowValue1',
      quantity: '',
      unit: '',
      ingredient: '',
      preparation: '',
      display_order: '',
    },
    {
      id: 3,
      recipe_id: 'rowValue1',
      quantity: '',
      unit: '',
      ingredient: '',
      preparation: '',
      display_order: '',
    },
  ])
}
