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
     {
      id: 10,
      recipe_id: '2',
      step_number: '1',
      instruction:
        'Heat Olive oil in large pot over medium heat. Add Pumpkin, Carrot and Potato. Cook for 5 minutes, stirring occassionally.',
    },
      {
      id: 11,
      recipe_id: '2',
      step_number: '2',
      instruction:
        'Add Salt, Pepper and Seasoning (if using), stir for one minute until fragrant.',
    },
      {
      id: 12,
      recipe_id: '2',
      step_number: '3',
      instruction:
        'Add Water to the pot, enough to cover the vegetables. Bring Water to a boil, then reduce to a gentle simmer.',
    },
      {
      id: 13,
      recipe_id: '2',
      step_number: '4',
      instruction:
        'Cook vegetables for 20 to 25 minutes, or until the vegetables are very soft',
    },
      {
      id: 14,
      recipe_id: '2',
      step_number: '5',
      instruction:
        'Remove pot from the heat. Carefully blend the soup with a stick blender until smooth. Or if using a blender, allow vegetables to cool slightly before blending vegetables in batches.',
    },
      {
      id: 15,
      recipe_id: '2',
      step_number: '6',
      instruction:
        'Return soup to low heat and stir in Coconut Cream. Bring soup back to boil, taste and add salt/pepper for taste.',
    },
      {
      id: 16,
      recipe_id: '2',
      step_number: '7',
      instruction:
        'Serve with an extra drizzle of Coconut Cream or Olive Oil and freshly toasted bread',
    },
      {
      id: ,
      recipe_id: '',
      step_number: '',
      instruction:
        '',
    },
      {
      id: ,
      recipe_id: '',
      step_number: '',
      instruction:
        '',
    },
      {
      id: ,
      recipe_id: '',
      step_number: '',
      instruction:
        '',
    },
    
  ])
}
