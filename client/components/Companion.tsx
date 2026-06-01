import { useCompanions } from '../hooks/useCompanions'

interface Props {
  plantId: number
}

export default function CompanionPlants({ plantId }: Props) {
  const { data, isLoading, error } = useCompanions(plantId)
  if (isLoading) {
    console.log('isLoading', isLoading)
    return <p>Loading companions...</p>
  }
  if (error) {
    console.log('error:', error)
    return <p>Something went wrong</p>
  }
  if (!data?.length) {
    return (
      <>
        <h2 className="text-2xl font-semibold">Companion Planting</h2>
        <dl className="leading-relaxed">
          <p>No companion planting information available yet.</p>
        </dl>
      </>
    )
  }
  console.log('plantId:', plantId)
  console.log('data:', data)

  const good = data?.filter((plant) => plant.compatibility_type === 'good')
  const avoid = data?.filter((plant) => plant.compatibility_type === 'avoid')

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Companion Planting</h2>
      </div>
      {good?.length > 0 && (
        <div>
          <dl className="leading-relaxed">
            <strong>
              <h3>Good Companions</h3>
            </strong>

            {good?.map((plant) => (
              <div key={plant.id}>
                <p>{plant.name}</p>
                <p>{plant.notes}</p>
              </div>
            ))}
          </dl>
        </div>
      )}
      {avoid?.length > 0 && (
        <div>
          <dl className="leading-relaxed">
            <strong>
              <h3>Avoid Planting Near</h3>
            </strong>
            {avoid?.map((plant) => (
              <div key={plant.id}>
                <p>{plant.name}</p>
                <p>{plant.notes}</p>
              </div>
            ))}
          </dl>
        </div>
      )}
    </>
  )
}
