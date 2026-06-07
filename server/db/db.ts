import db from './connection'
import { PlantData } from '../../models/plant'

export async function getAllPlants(
  regionHardinessZone?: string,
  month?: string,
  category: string,
): Promise<PlantData[]> {
  let query = db('vegetables')
    .join('season', 'vegetables.id', 'season.vege_id')
    .join('categories', 'vegetables.category_id', 'categories.id')
    .select('vegetables.*', 'categories.name as category')

  if (regionHardinessZone) {
    query = query.where('season.hardiness_zone', regionHardinessZone)
  }

  if (month) {
    query = query.where('season.planting_month', 'like', `%${month}%`)
  }

  const rows = await query

  return rows as PlantData[]
}
