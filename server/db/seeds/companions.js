export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('companions').del()

  // Inserts seed entries
  await knex('companions').insert([
    // Tomatoes
    {
      plant_id: 17,
      companion_plant_id: 23,
      compatibility_type: 'good',
      notes: 'Basil may improve flavour and repel pests.',
    },
    {
      plant_id: 17,
      companion_plant_id: 25,
      compatibility_type: 'good',
      notes: 'Chives may help deter aphids.',
    },
    {
      plant_id: 17,
      companion_plant_id: 1,
      compatibility_type: 'avoid',
      notes: 'Potatoes and tomatoes can spread blight.',
    },

    // Potatoes
    {
      plant_id: 1,
      companion_plant_id: 12,
      compatibility_type: 'good',
      notes: 'Beans help improve nitrogen in the soil.',
    },
    {
      plant_id: 1,
      companion_plant_id: 17,
      compatibility_type: 'avoid',
      notes: 'Tomatoes share diseases with potatoes.',
    },

    // Carrots
    {
      plant_id: 13,
      companion_plant_id: 2,
      compatibility_type: 'good',
      notes: 'Onions may repel carrot fly.',
    },
    {
      plant_id: 13,
      companion_plant_id: 25,
      compatibility_type: 'good',
      notes: 'Chives help deter pests.',
    },
    {
      plant_id: 13,
      companion_plant_id: 7,
      compatibility_type: 'good',
      notes: 'Lettuce makes good use of nearby space.',
    },

    // Onions
    {
      plant_id: 2,
      companion_plant_id: 13,
      compatibility_type: 'good',
      notes: 'Onions help deter carrot fly.',
    },
    {
      plant_id: 2,
      companion_plant_id: 12,
      compatibility_type: 'avoid',
      notes: 'Beans dislike onions nearby.',
    },
    // Lettuce
    {
      plant_id: 7,
      companion_plant_id: 13,
      compatibility_type: 'good',
      notes: 'Carrots and lettuce grow well together.',
    },
    {
      plant_id: 7,
      companion_plant_id: 23,
      compatibility_type: 'good',
      notes: 'Basil may help repel aphids.',
    },

    // Basil
    {
      plant_id: 23,
      companion_plant_id: 17,
      compatibility_type: 'good',
      notes: 'Tomatoes and basil are classic companion plants.',
    },
    {
      plant_id: 23,
      companion_plant_id: 18,
      compatibility_type: 'good',
      notes: 'Basil may improve pepper growth.',
    },

    // Beans
    {
      plant_id: 12,
      companion_plant_id: 1,
      compatibility_type: 'good',
      notes: 'Beans add nitrogen beneficial to potatoes.',
    },
    {
      plant_id: 12,
      companion_plant_id: 19,
      compatibility_type: 'good',
      notes: 'Cucumbers and beans grow well together.',
    },
    {
      plant_id: 12,
      companion_plant_id: 2,
      compatibility_type: 'avoid',
      notes: 'Onions may stunt bean growth.',
    },

    // Cucumbers
    {
      plant_id: 19,
      companion_plant_id: 12,
      compatibility_type: 'good',
      notes: 'Beans improve nitrogen availability.',
    },
    {
      plant_id: 19,
      companion_plant_id: 23,
    },
    // Broccoli
    {
      plant_id: 4,
      companion_plant_id: 2,
      compatibility_type: 'good',
      notes: 'Onions may deter cabbage pests.',
    },
    {
      plant_id: 4,
      companion_plant_id: 25,
      compatibility_type: 'good',
      notes: 'Chives help deter aphids.',
    },
    {
      plant_id: 4,
      companion_plant_id: 17,
      compatibility_type: 'avoid',
      notes: 'Tomatoes compete heavily for nutrients.',
    },

    // Cabbage
    {
      plant_id: 6,
      companion_plant_id: 25,
      compatibility_type: 'good',
      notes: 'Chives help repel pests.',
    },
    {
      plant_id: 6,
      companion_plant_id: 26,
      compatibility_type: 'good',
      notes: 'Coriander attracts beneficial insects.',
    },

    // Kale
    {
      plant_id: 10,
      companion_plant_id: 25,
      compatibility_type: 'good',
      notes: 'Chives may deter aphids.',
    },
    {
      plant_id: 10,
      companion_plant_id: 26,
      compatibility_type: 'good',
      notes: 'Coriander attracts pollinators.',
    },

    // Peas
    {
      plant_id: 11,
      companion_plant_id: 13,
      compatibility_type: 'good',
      notes: 'Carrots and peas grow well together.',
    },
    {
      plant_id: 11,
      companion_plant_id: 7,
      compatibility_type: 'good',
      notes: 'Lettuce benefits from pea shade.',
    },

    // Garlic
    {
      plant_id: 33,
      companion_plant_id: 34,
      compatibility_type: 'good',
      notes: 'Garlic may deter citrus pests.',
    },
    {
      plant_id: 33,
      companion_plant_id: 30,
      compatibility_type: 'good',
      notes: 'Garlic may help reduce fungal diseases in strawberries.',
    },

    // Strawberries
    {
      plant_id: 30,
      companion_plant_id: 33,
      compatibility_type: 'good',
      notes: 'Garlic may help deter fungal diseases.',
    },
    {
      plant_id: 30,
      companion_plant_id: 23,
      compatibility_type: 'good',
      notes: 'Basil may improve pollinator activity.',
    },

    // Apples
    {
      plant_id: 21,
      companion_plant_id: 25,
      compatibility_type: 'good',
      notes: 'Chives may help reduce apple scab.',
    },
    {
      plant_id: 21,
      companion_plant_id: 26,
      compatibility_type: 'good',
      notes: 'Coriander attracts pollinators.',
    },

    // Blueberries
    {
      plant_id: 24,
      companion_plant_id: 30,
      compatibility_type: 'good',
      notes: 'Both enjoy acidic soil conditions.',
    },

    // Lemon
    {
      plant_id: 34,
      companion_plant_id: 33,
      compatibility_type: 'good',
      notes: 'Garlic may deter pests around citrus trees.',
    },

    // Orange
    {
      plant_id: 35,
      companion_plant_id: 33,
      compatibility_type: 'good',
      notes: 'Garlic may help repel pests.',
    },

    // Watermelon
    {
      plant_id: 31,
      companion_plant_id: 12,
      compatibility_type: 'good',
      notes: 'Beans help improve nitrogen in the soil.',
    },
    {
      plant_id: 31,
      companion_plant_id: 19,
      compatibility_type: 'good',
      notes: 'Cucumbers and melons have similar growing conditions.',
    },

    // Mint
    {
      plant_id: 27,
      companion_plant_id: 6,
      compatibility_type: 'good',
      notes: 'Mint may help deter cabbage moths.',
    },
    {
      plant_id: 27,
      companion_plant_id: 17,
      compatibility_type: 'avoid',
      notes: 'Mint spreads aggressively and may overwhelm tomatoes.',
    },
  ])
}
