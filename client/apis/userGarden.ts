import request from 'superagent'
import { useAuthFetch } from '../components/lib/authFetch'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function addPlantToGarden(
  authFetch: ReturnType<typeof useAuthFetch>,
  plantId: number,
) {
  const res = await authFetch('/api/v1/garden', {
    method: 'POST',
    body: JSON.stringify({
      plant_id: plantId,
    }),
  })
  console.log('🔥 API CALL plantId:', plantId, new Date().toISOString())
  return res.json()
}
