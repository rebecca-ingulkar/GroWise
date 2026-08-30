/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('recipe_steps').del()
  await knex('recipe_steps').insert([
    {
      id: 1,
      recipe_id: '1',
      step_number: '1',
      instruction:
        'Place washed Potatoes in a saucepan and cover with cold, salted water.',
    },
    {
      id: 2,
      recipe_id: '1',
      step_number: '2',
      instruction:
        'Bring pot to a gentle boil and cook Potatoes for 12-15 minutes, or until tender when Potatoes are pierced with a sharp knife.',
    },
    {
      id: 3,
      recipe_id: '1',
      step_number: '3',
      instruction: 'Drain the water and leave Potatoes to cool for 15 minutes.',
    },
    {
      id: 4,
      recipe_id: '1',
      step_number: '4',
      instruction:
        'Place the eggs in a small saucepan, cover with water and bring to a boil. Cook for 9 minutes.',
    },
    {
      id: 5,
      recipe_id: '1',
      step_number: '5',
      instruction:
        'Transfer cooked eggs to cold water. Once cool, peel and roughly chop.',
    },
    {
      id: 6,
      recipe_id: '1',
      step_number: '6',
      instruction:
        'In a large bowl, combine the mayonnaise, sour cream, Dijon mustard, lemon juice, salt and pepper.',
    },
    {
      id: 7,
      recipe_id: '1',
      step_number: '7',
      instruction:
        'Add the spring onions, celery, gherkins and herbs. Stir until combined.',
    },
    {
      id: 8,
      recipe_id: '1',
      step_number: '8',
      instruction:
        'Add the slightly warm potatoes and gently fold them through the dressing. Carefully fold through the chopped eggs.',
    },
    {
      id: 9,
      recipe_id: '1',
      step_number: '9',
      instruction:
        'Cover and refrigerate for at least 30 minutes. Sprinkle with paprika and additional herbs before serving.',
    },
  ])
}
