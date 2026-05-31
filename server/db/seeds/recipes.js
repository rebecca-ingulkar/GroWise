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
      image: './recipes/steamedSpinach.webp',
    },
    {
      id: 5,
      title: 'Kale Chips',
      description: 'Crispy, melt in your mouth way to consume super food kale!',
      ingredients: 'Kale, Salt, Olive Oil. Optional: Apple cider vinegar',
      method:
        'Wash and dry Kale. Remove hard stem and rip kale into smaller size pieces. Combine Olive oil and salt (add vinegar here if using, see notes below). Using your hands, massage the kale with the olive oil and salt mixture. Place kale onto lined baking tray and cook in a preheated (175 degrees C) oven for 15mins. After 15 mins, carefully flip the chips and bake for 5 more mins. Take chips out of oven and allow to cool. Store in airtight container.',
      notes:
        'Add Apple cider vinegar to the Olive Oil and salt mix to upgrade these chips from salted to Salt and Vinegar seasoning.',
      image: './recipes/kalechips.webp',
    },
    {
      id: 6,
      title: 'Beetroot and Carrot Salad',
      description: '',
      ingredients:
        'Beetroot, Carrot, Olive Oil, Balsamic Vinegar, Salt and Pepper',
      method:
        'Grate beetroot and carrot into mixing bowl. Mix well. Combine Oil, vingear, salt and pepper and mix through beetroot and carrots. ',
      notes:
        'Optional: Add raisins to salad for extra sweetness. Add seeds for extra crunch. Or add Feta for salty extra. ',
      image: './recipes/beetrootcarrotsalad.webp',
    },
    {
      id: 7,
      title: 'Menemen',
      description: 'Turkish breakfast classic',
      ingredients:
        'Eggs, Tomato, Onion, Capsicum, Cheese, Olive Oil, Butter, Salt and Pepper',
      method:
        'Whisk eggs until combined, leave to the side. Dice onion, tomato and Capsicum. Heat pan on medium heat and add olive oil and butter. Once pan is hot, add onions and saute. Turn heat to low and add capsicum. Stir and cover with lid until Capsicum is cooked. Add Tomato, stir to combine. Season as preferred to your taste. Add slither of butter and allow time to melt. Pour egg into the veges, stir vigorously until egg is almost cooked. Turn off the heat, sprinkle cheese on the top and cover with lid to let cheese melt. Serve hot with bread on the side. ',
      notes: 'Good taste',
      image: './recipes/menemen.webp',
    },
    {
      id: 8,
      title: 'Yogurt Dip with Garlic and Dill',
      description: 'Refreshing yoghurt dip to add on top of everything',
      ingredients: 'Yoghurt, Dill (can be dried), garlic, salt',
      method:
        'Add yoghurt, diced garlic and dill to a bowl. Mix well and add salt to taste. Chill in the fridge until serving.',
      notes: 'Goes well with Melitzanosalata',
      image: './recipes/dilldip.webp',
    },
    {
      id: 9,
      title: 'Guacamole',
      description: '',
      ingredients:
        'Avocado, Onion, Coriander, Salt, Pepper, Lemon Juice, Olive Oil',
      method:
        'Mash Avocado. Thinly dice onion. Wash and cut Coriander. Combine all ingredients and season with Salt and Pepper to taste.',
      notes: 'Optional: Add diced tomato for a summery taste.',
      image: './recipes/guac.webp',
    },
    {
      id: 10,
      title: 'Pastries w Peach, Honey and Camembert',
      description: 'Just a perfect savoury treat for morning festivities.',
      ingredients:
        'Puff pastry, Peaches, Honey, Camembert, Rosemary, Salt and Pepper',
      method:
        'Cut puff pastry into squares and push into non-stick/oiled muffin tins. Add sliced peaches on pastry, then add rosemary, sliced camembert, honey, S&P. Use the corners of the pastry squares and bring them together above the filling. Cook at 180 (deg Cel) until pastry is puffed and browning. ',
      notes: 'Delicious and decedent. ',
      image: './recipes/peachpastry.webp',
    },
  ])
}
