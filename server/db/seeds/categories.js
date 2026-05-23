export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()

  // Inserts seed entries
  await knex('categories').insert([
    { id: 1, name: 'fruit' },
    { id: 2, name: 'veges' },
    { id: 3, name: 'herb' },
  ])
}
