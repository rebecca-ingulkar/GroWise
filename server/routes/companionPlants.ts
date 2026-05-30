import express from 'express'
import * as db from '../db/companions.js'

const router = express.Router()

router.get('/:id/companions', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const companions = await db.getCompanionsByPlant(id)
    res.json(companions)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to get companions' })
  }
})

export default router
