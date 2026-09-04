import express from 'express'
import * as db from '../db/recipes'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const recipeId = Number(req.params.id)
    if (Number.isNaN(recipeId)) {
      res.status(400).json({error: 'Invalid recipe ID'})
      return }
    const recipe = await db.getRecipeById(recipeId)
    if (!recipe) {
      res.status(404).json({error: 'Recipe not found'})
      return 
    }
    
    res.json(recipe)
  } catch (err) {
    console.error(err)
    res.sendStatus(500).json({error: 'Unable to retrieve recipe'})
  }
})

router.get('/:id/vegetables', async (req, res) => {
  try {
    const recipeId = Number(req.params.id)
    if (Number.isNaN(recipeId)) {
      res.status(400).json({ error: 'Invalid recipe ID})
        return
    }
    const vegetables = await db.getVegetablesByRecipeId(recipeId)
    res.json(vegetables)
  } catch (err) {
    console.error(err)
    res.sendStatus(500).json({ error: 'Unable to retrieve vegetables'})
  }
})

export default router
