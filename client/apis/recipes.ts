import request from 'superagent'

const rootURL = new URL(`api/v1`, document.baseURI)

export async function getRecipesByVegetableId(id: number) {
  const res = await request.get(`${rootURL}/vegetables/${id}/recipes`)
  return res.body
}
