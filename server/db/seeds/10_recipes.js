export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()

  // Inserts seed entries
  await knex('recipes').insert([
    {
      id: 1,
      title: 'Potato Salad',
      description: 'https://www.recipetineats.com/potato-salad/',
      notes: '',
      image: '',
    },
    {
      id: 2,
      title: 'Pumpkin Soup',
      description: 'Creamy and delicious soup for a cool winters night.',
      notes:
        'Optional: add chilli flakes for an extra kick / drizzle extra coconut cream or olive oil over your bowl of hot soup.',
      image: './recipes/pumpkinsoup.webp',
    },
    {
      id: 3,
      title: 'Broccoli Salad',
      description: 'https://www.recipetineats.com/broccoli-salad/#recipe',
      notes: '',
      image: '',
    },
    {
      id: 4,
      title: 'Steamed Spinach',
      description: 'Flavorsome steamed spinach',
      notes: 'Unbeatable',
      image: './recipes/steamedSpinach.webp',
    },
    {
      id: 5,
      title: 'Kale Chips',
      description: 'Crispy, melt in your mouth way to consume super food kale!',
      notes:
        'Add Apple cider vinegar to the Olive Oil and salt mix to upgrade these chips from salted to Salt and Vinegar seasoning.',
      image: './recipes/kalechips.webp',
    },
    {
      id: 6,
      title: 'Beetroot and Carrot Salad',
      description: '',
      notes:
        'Optional: Add raisins to salad for extra sweetness. Add seeds for extra crunch. Or add Feta for salty extra. ',
      image: './recipes/beetrootcarrotsalad.webp',
    },
    {
      id: 7,
      title: 'Menemen',
      description: 'Turkish breakfast classic',
      notes: 'Good taste',
      image: './recipes/menemen.webp',
    },
    {
      id: 8,
      title: 'Yogurt Dip with Garlic and Dill',
      description: 'Refreshing yoghurt dip to add on top of everything',
      notes: 'Goes well with Melitzanosalata',
      image: './recipes/dilldip.webp',
    },
    {
      id: 9,
      title: 'Guacamole',
      description: '',
      notes: 'Optional: Add diced tomato for a summery taste.',
      image: './recipes/guac.webp',
    },
    {
      id: 10,
      title: 'Pastries w Peach, Honey and Camembert',
      description: 'Just a perfect savoury treat for morning festivities.',
      notes: 'Delicious and decedent. ',
      image: './recipes/peachpastry.webp',
    },
  ])
}
