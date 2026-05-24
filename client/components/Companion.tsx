import { useCompanions } from '../hooks/useCompanions'

interface Props {
  plantId: number
}

export default function CompanionPlants({ plantId }: Props) {
  const { data, isLoading, error } = useCompanions(plantId)
  if (isLoading) return <p>Loading companions...</p>
  if (error) return <p>Something went wrong</p>
  const good = data?.filter((plant) => plant.compatibility_type === 'good')
}
