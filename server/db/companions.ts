// import { CompanionData } from '../../models/companion'
import db from './connection'

export async function getCompanionsByPlant(id: number) {
  const plantCompanion = await db('companions')
    .join('vegetables', 'companions.companion_plant_id', 'vegetables.id')
    .where('companions.plant_id', id)
    .select(
      'vegetables.id',
      'vegetables.name',
      'companions.compatibility_type',
      'companions.notes',
    )
  return plantCompanion
}
