import { useQuery } from '@tanstack/react-query'
import { Recipe } from '../../models/recipe'
import { getRecipeById, getRecipesByVegetableId } from '../apis/recipes'

export function useRecipe(vegetableId: number) {
  return useQuery<Recipe[]>({
    queryKey: ['recipes', vegetableId],
    queryFn: () => getRecipesByVegetableId(vegetableId),
  })
}
export function useRecipeById(recipeId: number) {
  return useQuery<Recipe>({
    queryKey: ['recipe', recipeId],
    queryFn: () => getRecipeById(recipeId),
  })
}
