import { useCompanions } from '../hooks/useCompanions'

interface Props {
  plantId: number
}

export default function CompanionPlants({ plantId }: Props) {
  const { data, isLoading, error } = useCompanions(plantId)
  if (isLoading) return <p>Loading companions...</p>
  if (error) return <p>Something went wrong</p>
  const good = data?.filter((plant) => plant.compatibility_type === 'good')
  const avoid = data?.filter((plant) => plant.compatibility_type === 'avoid')

  return (
    <>
      <div>
        <h2>Companion Planting</h2>
      </div>
      <div>
        <h3>Good Companions</h3>
        {good?.map((plant) => {
          ;<div key={plant.id}>
            <p>{plant.name}</p>
            <p>{plant.notes}</p>
          </div>
        })}
      </div>
      <div>
        <h3>Avoid Planting Near</h3>
        {avoid?.map((plant) => {
          ;<div key={plant.id}>
            <p>{plant.name}</p>
            <p>{plant.notes}</p>
          </div>
        })}
      </div>
    </>
  )
}
