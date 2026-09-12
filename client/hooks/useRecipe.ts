import { useQuery } from '@tanstack/react-query'
import { getRecipeById, getRecipesByVegetableId } from '../apis/recipes'
import type { Recipe, RecipeSummary } from '../../models/recipe'

export function useRecipeByVegetableId(id: number) {
  return useQuery<RecipeSummary[], Error>({
    queryKey: ['recipes', 'vegetable', id],
    queryFn: () => getRecipesByVegetableId(id),
    enabled: Number.isFinite(id) && id > 0,
  })
}
export function useRecipeById(id: number) {
  return useQuery<Recipe, Error>({
    queryKey: ['recipe', id],
    queryFn: () => getRecipeById(id),
    enabled: Number.isFinite(id),
  })
}
