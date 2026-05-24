import { useQuery } from '@tanstack/react-query'
import { getCompanions } from '../apis/companion'

export function useCompanions(id: number) {
  return useQuery({
    queryKey: ['companions', id],
    queryFn: () => getCompanions(id),
  })
}
