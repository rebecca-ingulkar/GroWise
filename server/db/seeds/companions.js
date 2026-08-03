export async function seed(knex) {
  await knex('companions').del()

  await knex('companions').insert([
    // Tomatoes (17)
    {
      plant_id: 17,
      companion_plant_id: 23,
      compatibility_type: 'good',
      notes: 'Basil may improve flavour and help repel pests.',
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
      notes: 'Potatoes and tomatoes can share blight diseases.',
    },
    {
      plant_id: 17,
      companion_plant_id: 68,
      compatibility_type: 'good',
      notes: 'Nasturtium can attract pollinators and act as a trap crop.',
    },

    // Potatoes (1)
    {
      plant_id: 1,
      companion_plant_id: 12,
      compatibility_type: 'good',
      notes: 'Beans improve soil nitrogen availability.',
    },
    {
      plant_id: 1,
      companion_plant_id: 33,
      compatibility_type: 'good',
      notes: 'Garlic may help deter pests.',
    },
    {
      plant_id: 1,
      companion_plant_id: 17,
      compatibility_type: 'avoid',
      notes: 'Tomatoes and potatoes can spread blight.',
    },

    // Carrots (13)
    {
      plant_id: 13,
      companion_plant_id: 2,
      compatibility_type: 'good',
      notes: 'Onions may deter carrot fly.',
    },
    {
      plant_id: 13,
      companion_plant_id: 25,
      compatibility_type: 'good',
      notes: 'Chives can help repel pests.',
    },
    {
      plant_id: 13,
      companion_plant_id: 7,
      compatibility_type: 'good',
      notes: 'Lettuce uses space efficiently around carrots.',
    },

    // Brassicas
    {
      plant_id: 4,
      companion_plant_id: 2,
      compatibility_type: 'good',
      notes: 'Onions can help deter brassica pests.',
    },
    {
      plant_id: 4,
      companion_plant_id: 26,
      compatibility_type: 'good',
      notes: 'Coriander attracts beneficial insects.',
    },
    {
      plant_id: 6,
      companion_plant_id: 25,
      compatibility_type: 'good',
      notes: 'Chives help deter pests.',
    },
    {
      plant_id: 10,
      companion_plant_id: 27,
      compatibility_type: 'good',
      notes: 'Mint may deter cabbage moths.',
    },
    {
      plant_id: 61,
      companion_plant_id: 68,
      compatibility_type: 'good',
      notes: 'Nasturtium can attract beneficial insects.',
    },

    // Beans & Peas
    {
      plant_id: 12,
      companion_plant_id: 19,
      compatibility_type: 'good',
      notes: 'Beans and cucumbers grow well together.',
    },
    {
      plant_id: 12,
      companion_plant_id: 2,
      compatibility_type: 'avoid',
      notes: 'Onions may inhibit bean growth.',
    },
    {
      plant_id: 11,
      companion_plant_id: 13,
      compatibility_type: 'good',
      notes: 'Carrots and peas grow well together.',
    },

    // Cucumbers (19)
    {
      plant_id: 19,
      companion_plant_id: 12,
      compatibility_type: 'good',
      notes: 'Beans provide nitrogen for cucumber growth.',
    },
    {
      plant_id: 19,
      companion_plant_id: 23,
      compatibility_type: 'good',
      notes: 'Basil attracts beneficial insects.',
    },
    {
      plant_id: 19,
      companion_plant_id: 68,
      compatibility_type: 'good',
      notes: 'Nasturtium can protect cucumbers from pests.',
    },

    // Garlic (33)
    {
      plant_id: 33,
      companion_plant_id: 30,
      compatibility_type: 'good',
      notes: 'Garlic may help reduce fungal issues around strawberries.',
    },
    {
      plant_id: 33,
      companion_plant_id: 34,
      compatibility_type: 'good',
      notes: 'Garlic can help deter citrus pests.',
    },

    // Strawberries (30)
    {
      plant_id: 30,
      companion_plant_id: 33,
      compatibility_type: 'good',
      notes: 'Garlic helps deter pests and fungal problems.',
    },
    {
      plant_id: 30,
      companion_plant_id: 23,
      compatibility_type: 'good',
      notes: 'Basil attracts pollinators.',
    },
    // Eggplant (57)
    {
      plant_id: 57,
      companion_plant_id: 23,
      compatibility_type: 'good',
      notes: 'Basil may improve growth and attract pollinators.',
    },
    {
      plant_id: 57,
      companion_plant_id: 68,
      compatibility_type: 'good',
      notes: 'Nasturtium can act as a trap crop for pests.',
    },

    // Sweetcorn (62)
    {
      plant_id: 62,
      companion_plant_id: 12,
      compatibility_type: 'good',
      notes: 'Beans climb corn and improve nitrogen availability.',
    },
    {
      plant_id: 62,
      companion_plant_id: 19,
      compatibility_type: 'good',
      notes: 'Cucumbers benefit from corn providing shelter.',
    },

    // Celery (58)
    {
      plant_id: 58,
      companion_plant_id: 23,
      compatibility_type: 'good',
      notes: 'Basil attracts beneficial insects nearby.',
    },

    // Herbs
    {
      plant_id: 23,
      companion_plant_id: 17,
      compatibility_type: 'good',
      notes: 'Tomatoes and basil are classic companions.',
    },
    {
      plant_id: 29,
      companion_plant_id: 17,
      compatibility_type: 'good',
      notes: 'Sage can help deter some pests.',
    },

    // Fruit Trees
    {
      plant_id: 21,
      companion_plant_id: 68,
      compatibility_type: 'good',
      notes: 'Nasturtium attracts beneficial insects around fruit trees.',
    },
    {
      plant_id: 32,
      companion_plant_id: 66,
      compatibility_type: 'good',
      notes: 'Lavender attracts pollinators.',
    },

    // Blueberries (24)
    {
      plant_id: 24,
      companion_plant_id: 30,
      compatibility_type: 'good',
      notes: 'Both prefer similar acidic growing conditions.',
    },

    // Flowers
    {
      plant_id: 68,
      companion_plant_id: 17,
      compatibility_type: 'good',
      notes: 'Nasturtium helps attract pollinators and deter pests.',
    },
    {
      plant_id: 70,
      companion_plant_id: 62,
      compatibility_type: 'good',
      notes: 'Borage attracts bees and improves pollination.',
    },

    // Mint
    {
      plant_id: 27,
      companion_plant_id: 6,
      compatibility_type: 'good',
      notes: 'Mint may deter cabbage moths.',
    },
    {
      plant_id: 27,
      companion_plant_id: 17,
      compatibility_type: 'avoid',
      notes: 'Mint spreads aggressively and may overwhelm plants.',
    },
  ])
}
