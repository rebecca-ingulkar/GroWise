import express from 'express'
import db from '../db/connection.js'
import checkJwt, { JwtRequest } from '../auth0.js'
import { UserProfileUpdate } from '../../models/user.js'

const router = express.Router()

// GET /users/me — fetch or create user
router.get('/me', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub

  if (!auth0Id) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // Look up by auth0_id (NOT by id) + added regions name as well
  const user = await db('users')
    .leftJoin('region', 'users.region_id', 'region.id')
    .select(
      'users.id',
      'users.auth0_id',
      'users.display_name',
      'users.region_id',
      'region.name as region_name',
    )
    .where('users.auth0_id', auth0Id)
    .first()

  // If user doesn't exist → create it
  if (!user) {
    const created = await db('users')
      .insert({
        auth0_id: auth0Id,
        display_name: null,
        region_id: null,
      })
      .returning('*')

    return res.json({
      ...created[0],
      region_name: null,
      isNew: true,
    })
  }

  return res.json({
    ...user,
    isNew: false,
  })
})

// PATCH /users/me — update user profile
router.patch(
  '/me',
  checkJwt,
  async (req: JwtRequest<UserProfileUpdate>, res) => {
    const auth0Id = req.auth?.sub

    if (!auth0Id) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    const { display_name, region_id } = req.body
    try {
      const updatedCount = await db('users')
        .where({ auth0_id: auth0Id })
        .update({ display_name, region_id })
      if (updatedCount === 0) {
        return res.status(404).json({ error: 'User not found' })
      }
      const updated = await db('users')
        .leftJoin('region', 'users.region_id', 'region.id')
        .select(
          'users.id',
          'users.auth0_id',
          'users.display_name',
          'users.region_id',
          'region.name as region_name',
        )
        .where('users.auth0_id', auth0Id)
        .first()
      return res.json(updated)
    } catch (error) {
      console.log('Failed to update user profile:', error)
      return res.status(500).json({ error: 'Failed to update user profile' })
    }
    // await db('users').where({ auth0_id: auth0Id }).update({
    //   display_name,
    //   region_id,
    // })

    // const updated = await db('users').where({ auth0_id: auth0Id }).first()

    // return res.json(updated)
  },
)

export default router
