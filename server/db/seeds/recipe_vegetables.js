export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('recipe_vegetables').del()

  // Inserts seed entries
  await knex('recipe_vegetables').insert([
    { recipe_id: 1, vegetable_id: 1 }, // Potatoes
    { recipe_id: 1, vegetable_id: 2 }, // Onions
    { recipe_id: 1, vegetable_id: 19 }, // Cucumbers
    { recipe_id: 1, vegetable_id: 33 }, // Garlic

    // Pumpkin Soup
    { recipe_id: 2, vegetable_id: 3 }, // Pumpkin
    { recipe_id: 2, vegetable_id: 13 }, // Carrots
    { recipe_id: 2, vegetable_id: 1 }, // Potatoes

    // Broccoli Salad
    { recipe_id: 3, vegetable_id: 4 }, // Broccoli
    { recipe_id: 3, vegetable_id: 33 }, // Garlic
    { recipe_id: 3, vegetable_id: 28 }, // Parsley

    // Steamed Spinach
    { recipe_id: 4, vegetable_id: 8 }, // Spinach
    { recipe_id: 4, vegetable_id: 33 }, // Garlic

    // Kale Chips
    { recipe_id: 5, vegetable_id: 10 }, // Kale

    // Beetroot and Carrot Salad
    { recipe_id: 6, vegetable_id: 14 }, // Beetroot
    { recipe_id: 6, vegetable_id: 13 }, // Carrots

    // Menemen
    { recipe_id: 7, vegetable_id: 17 }, // Tomatoes
    { recipe_id: 7, vegetable_id: 2 }, // Onions
    { recipe_id: 7, vegetable_id: 18 }, // Capsicum

    // Yogurt Dip
    { recipe_id: 8, vegetable_id: 33 }, // Garlic

    // Guacamole
    { recipe_id: 9, vegetable_id: 22 }, // Avocado
    { recipe_id: 9, vegetable_id: 2 }, // Onion
    { recipe_id: 9, vegetable_id: 26 }, // Coriander
    { recipe_id: 9, vegetable_id: 34 }, // Lemon

    // Peach Pastries
    { recipe_id: 10, vegetable_id: 36 }, // Peaches
  ])
}
