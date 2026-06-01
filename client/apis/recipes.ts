import request from 'superagent'
import { Recipe } from '../../models/recipe'

export async function getRecipesByVegetableId(
  vegetableId: number,
): Promise<Recipe[]> {
  const res = await request.get(`api/v1/vegetables/${vegetableId}/recipes`)
  return res.body
}
