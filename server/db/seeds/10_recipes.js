export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()

  // Inserts seed entries
  await knex('recipes').insert([
    {
      id: 1,
      title: 'Potato Salad',
      description: 'Creamy and delicious hearty salad.',
      serves: '6',
      notes: 'Store covered in the refrigerator and consume within three days.',
      image: '',
    },
    {
      id: 2,
      title: 'Pumpkin Soup',
      description: 'Creamy and delicious soup for a cool winters night.',
      serves: '6',
      notes:
        'Optional: add chilli flakes for an extra kick / drizzle extra coconut cream or olive oil over your bowl of hot soup.Add ½–1 teaspoon of curry powder, ground cumin, smoked paprika or ground nutmeg for additional flavour. For a thinner soup, add another 100–250 ml of water. Store covered in the refrigerator for up to three days, or freeze for up to three months.',
      image: '/recipes/pumpkinsoup.webp',
    },
    {
      id: 3,
      title: 'Broccoli Salad',
      description:
        "A crunchy, sweet, and savory salad that's perfect for BBQs, lunches, or as a side dish.",
      serves: '4-6',
      notes:
        'Tip: The salad is often even better the next day after the raisins soften slightly and the flavors meld together. 🍴',
      image: '',
    },
    {
      id: 4,
      title: 'Steamed Spinach',
      description: 'Flavorsome steamed spinach',
      serves: '4',
      notes: 'Unbeatable',
      image: './recipes/steamedSpinach.webp',
    },
    {
      id: 5,
      title: 'Kale Chips',
      description: 'Crispy, melt in your mouth way to consume super food kale!',
      serves: '',
      notes:
        'Add Apple cider vinegar to the Olive Oil and salt mix to upgrade these chips from salted to Salt and Vinegar seasoning.',
      image: './recipes/kalechips.webp',
    },
    {
      id: 6,
      title: 'Beetroot and Carrot Salad',
      description: '',
      serves: '',
      notes:
        'Optional: Add raisins to salad for extra sweetness. Add seeds for extra crunch. Or add Feta for salty extra. ',
      image: './recipes/beetrootcarrotsalad.webp',
    },
    {
      id: 7,
      title: 'Menemen',
      description: 'Turkish breakfast classic',
      serves: '',
      notes: 'Good taste',
      image: './recipes/menemen.webp',
    },
    {
      id: 8,
      title: 'Yogurt Dip with Garlic and Dill',
      description: 'Refreshing yoghurt dip to add on top of everything',
      serves: '',
      notes: 'Goes well with Melitzanosalata',
      image: './recipes/dilldip.webp',
    },
    {
      id: 9,
      title: 'Guacamole',
      description: '',
      serves: '',
      notes: 'Optional: Add diced tomato for a summery taste.',
      image: './recipes/guac.webp',
    },
    {
      id: 10,
      title: 'Pastries w Peach, Honey and Camembert',
      description: 'Just a perfect savoury treat for morning festivities.',
      serves: '',
      notes: 'Delicious and decedent. ',
      image: './recipes/peachpastry.webp',
    },
  ])
}
