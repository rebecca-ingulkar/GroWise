export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()

  // Inserts seed entries
  await knex('categories').insert([
    { id: 1, name: 'Vegetable' },
    { id: 2, name: 'Herb' },
    { id: 3, name: 'Fruit' },
    { id: 4, name: 'Fruit Tree' },
    { id: 5, name: 'Decorative' },
    { id: 6, name: 'Nut Tree' },
    { id: 7, name: 'Native Tree' },
  ])
}
