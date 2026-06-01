import express from 'express'
import * as db from '../db/recipes'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const recipe = await db.getRecipeById(Number(req.params.id))
    res.json(recipe)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

router.get('/:id/ingredients', async (req, res) => {
  try {
    const vegetables = await db.getVegetablesByRecipeId(Number(req.params.id))
    res.json(vegetables)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

export default router
