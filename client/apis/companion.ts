import request from 'superagent'

export async function getCompanions(id: number) {
  const response = await request.get(`/api/v1/vegetables/${id}/companions`)

  return response.body
}
