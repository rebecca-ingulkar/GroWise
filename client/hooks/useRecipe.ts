import { useQuery } from '@tanstack/react-query'
import { Recipe } from '../../models/recipe'
import { getRecipesByVegetableId } from '../apis/recipes'

export function useRecipe(vegetableId: number) {
  return useQuery<Recipe[]>({
    queryKey: ['recipes', vegetableId],
    queryFn: () => getRecipesByVegetableId(vegetableId),
  })
}
