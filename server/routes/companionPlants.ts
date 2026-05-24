import express from 'express'
import db from '../db/connection.js'

const router = express.Router()

router.get('/:id/companions', async (requestAnimationFrame, res) => {
  const id = Number(req.params.id)
  const companions = await db.getCompanionsByPlant(id)
  res.json(companions)
})
