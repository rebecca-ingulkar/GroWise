import express from 'express'
import * as db from '../db/plantDetail'
import * as data from '../db/recipes'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const plantDetail = await db.getPlantDetail(id)
    // console.log('Server returning:', plantDetail)
    res.json(plantDetail)
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : 'Error getting plant details',
    )
    res.status(500).send('Could not get plant detail')
  }
})

router.get('/:id/recipes', async (req, res) => {
  try {
    const recipes = await data.getRecipesByVegetableId(Number(req.params.id))

    console.log('Plant Id:', req.params.id)
    console.log('Recipes found:', recipes)
    res.json(recipes)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

export default router
