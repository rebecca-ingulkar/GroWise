export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('companions').del()

  // Inserts seed entries
  await knex('companions').insert([
    {
      id: 1,
      plant_id: '1',
      companion_plant_id: '1',
      compatibility_type: 'best friends',
      notes: '',
    },
    {
      id: 2,
      plant_id: '1',
      companion_plant_id: '1',
      compatibility_type: 'enemies',
      notes: '',
    },
    {
      id: 3,
      plant_id: '1',
      companion_plant_id: '1',
      compatibility_type: 'cum se cum sa',
      notes: '',
    },
  ])
}
