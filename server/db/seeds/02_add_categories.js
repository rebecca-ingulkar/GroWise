export async function seed(knex) {
  // Vegetables
  const vegetables = [
    'Potatoes',
    'Onions',
    'Pumpkin',
    'Broccoli',
    'Cauliflower',
    'Cabbage',
    'Lettuce',
    'Spinach',
    'Silverbeet / Swiss Chard',
    'Kale',
    'Garden Peas',
    'Green Beans',
    'Carrots',
    'Beetroot',
    'Parsnips',
    'Kumara',
    'Tomatoes',
    'Capsicum',
    'Cucumbers',
    'Turnips',
    'Butternut Squash',
    'Courgette (Zucchini)',
    'Snow Peas',
    'Sugar Snap Peas',
    'Runner Beans',
    'Broad Beans',
    'Chilli Pepper',
    'Eggplant',
    'Celery',
    'Spring Onion',
    'Radish',
    'Brussels Sprouts',
    'Sweetcorn',
    'Fennel',
    'New Zealand Spinach',
    'Pūhā',
  ]

  for (const name of vegetables) {
    await knex('vegetables').where('name', name).update({ category_id: 1 })
  }

  // Herbs
  const herbs = [
    'Basil',
    'Chives',
    'Coriander',
    'Mint',
    'Parsley',
    'Sage',
    'Garlic',
    'Thyme',
    'Rosemary',
    'Oregano',
    'Dill',
    'Bay Laurel',
    'Thai Basil',
    'Kawakawa',
    'Horopito',
  ]

  for (const name of herbs) {
    await knex('vegetables').where('name', name).update({ category_id: 2 })
  }

  // Fruit (berry/vining/fruiting plants)
  const fruits = [
    'Blueberry',
    'Strawberry',
    'Watermelon',
    'Raspberry',
    'Blackberry',
    'Boysenberry',
    'Cranberry',
    'Passionfruit',
    'Tamarillo',
  ]

  for (const name of fruits) {
    await knex('vegetables').where('name', name).update({ category_id: 3 })
  }

  // Fruit Trees
  const fruitTrees = [
    'Apples',
    'Avocado',
    'Feijoa',
    'Lemon',
    'Orange',
    'Peaches',
    'Pear',
    'Plum',
    'Nectarine',
    'Mandarin',
    'Lime',
    'Fig',
    'Olive',
    'Persimmon',
    'Apricot',
    'Grapes',
    'Kiwifruit',
  ]

  for (const name of fruitTrees) {
    await knex('vegetables').where('name', name).update({ category_id: 4 })
  }

  // Nut Trees
  const nutTrees = ['Hazelnut', 'Walnut', 'Almond']

  for (const name of nutTrees) {
    await knex('vegetables').where('name', name).update({ category_id: 6 })
  }

  // Decorative / flowers
  const decorative = [
    'Lavender',
    'Chamomile',
    'Nasturtium',
    'Calendula',
    'Borage',
    'Viola',
  ]

  for (const name of decorative) {
    await knex('vegetables').where('name', name).update({ category_id: 5 })
  }

  // Native Trees / NZ natives
  const nativeTrees = ['Kawakawa', 'Horopito']

  for (const name of nativeTrees) {
    await knex('vegetables').where('name', name).update({ category_id: 7 })
  }
}
