import { useQuery } from '@tanstack/react-query'
import { getRecipesByVegetableId } from '../apis/recipes'

export function useRecipes(vegetableId: number) {
  return useQuery({
    queryKey: ['recipes', vegetableId],
    queryFn: () => getRecipesByVegetableId(vegetableId),
    enabled: !!vegetableId,
  })
}
