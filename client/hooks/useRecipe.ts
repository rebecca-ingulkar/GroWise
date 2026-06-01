import { useQuery } from '@tanstack/react-query'
import { Recipe } from '../../models/recipe'
import { getRecipesByVegetableId } from '../apis/recipes'

export function useRecipes(vegetableId: number) {
  return useQuery<Recipes[]>({
    queryKey: ['recipes', vegetableId],
    queryFn: () => getRecipesByVegetableId(vegetableId),
  })
}
