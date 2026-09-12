import { Recipe, RecipeSummary } from '../../models/recipe'

export async function getRecipesByVegetableId(
  id: number,
): Promise<RecipeSummary[]> {
  const res = await fetch(`/api/v1/vegetables/${id}/recipes`)
  if (!res.ok) {
    throw new Error('Failed to fetch recipes')
  }
  return res.json()
}

export async function getRecipeById(id: number): Promise<Recipe> {
  const res = await fetch(`/api/v1/recipes/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch recipe')
  }

  return res.json()
}
