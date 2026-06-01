// import request from 'superagent'
// import { Recipe } from '../../models/recipe'

// export async function getRecipesByVegetableId(id: number) {
//   const res = await fetch(`api/v1/vegetables/${id}/recipes`)
//   if (!res.ok) throw new Error('Failed to fetch recipes')
//   return res.json
// }
export async function getRecipesByVegetableId(id: number) {
  const res = await fetch(`/api/v1/vegetables/${id}/recipes`)
  if (!res.ok) throw new Error('Failed to fetch recipes')
  return res.json()
}
