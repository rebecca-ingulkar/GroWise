export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()

  // Inserts seed entries
  await knex('recipes').insert([
    {
      id: 1,
      title: 'Potato Salad',
      description: 'https://www.recipetineats.com/potato-salad/',
      ingredients: 'Potatoes, Onion, Cucumber, Celery, Garlic,',
      method: '',
      notes: '',
      image: '',
    },
    {
      id: 2,
      title: 'Pumpkin Soup',
      description: 'Creamy and delicious soup for a cool winters night.',
      ingredients:
        'Pumpkin, Salt, Pepper, Carrot, Potato, Seasoning of choice, Coconut Cream, Olive oil',
      method:
        'Peel and cut pumpkin, carrot and potato and cook in your preferred manner. Allow to cool slightly before blending cooked vegetables in food processor until blended til smooth. Add water while blending, until you reach your desired consistency. Put vegetable puree into pot on medium heat, allow to heat until bubbles splatter the soup all over the kitchen. Turn heat to low, and season with salt and pepper to your taste. Stir Coconut Cream into soup. Remove from heat and enjoy with toast.',
      notes:
        'Optional: add chilli flakes for an extra kick / drizzle extra coconut cream or olive oil over your bowl of hot soup.',
      image: './recipes/pumpkinsoup.webp',
    },
    {
      id: 3,
      title: 'Broccoli Salad',
      description: 'https://www.recipetineats.com/broccoli-salad/#recipe',
      ingredients: 'Broccoli, Garlic, Dill, Parsley,',
      method: '',
      notes: '',
      image: '',
    },
    {
      id: 4,
      title: 'Steamed Spinach',
      description: 'Flavorsome steamed spinach',
      ingredients:
        'Spinach (cleaned), Garlic, Light Soy Sauce, Oyster Sauce, Oil',
      method:
        'Steam cut spinach for 2mins. Blanch cooked spinach by quickly removing it from the steamer and putting it directly into a bowl of cold water to stop the cooking process. Leave the spinach to drain. Add Spinach to serving plate or bowl. Combine soy sauce and oyster sauce and pour it over the spinach. In a small pan or pot, heat oil. Once hot, add finely chopped garlic. Cook until garlic begins to brown. Quickly pour the hot oil/garlic over the spinach.  ',
      notes: 'Unbeatable',
      image: 'steamedSpinach.webp',
    },
    {
      id: 5,
      title: '',
      description: '',
      ingredients: '',
      method: '',
      notes: '',
      image: '',
    },
    {
      id: 6,
      title: '',
      description: '',
      ingredients: '',
      method: '',
      notes: '',
      image: '',
    },
    {
      id: 7,
      title: '',
      description: '',
      ingredients: '',
      method: '',
      notes: '',
      image: '',
    },
    {
      id: 8,
      title: '',
      description: '',
      ingredients: '',
      method: '',
      notes: '',
      image: '',
    },
    {
      id: 9,
      title: '',
      description: '',
      ingredients: '',
      method: '',
      notes: '',
      image: '',
    },
    {
      id: 10,
      title: '',
      description: '',
      ingredients: '',
      method: '',
      notes: '',
      image: '',
    },
  ])
}
