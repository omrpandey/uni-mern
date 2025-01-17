const express = require('express')
const Users = require('../models/users')
const router = express.Router()

// GET all products (this seems like a placeholder, add a real database call)
router.get('/', (req, res) => {
    res.json({ mssg: 'Users' })
})

// GET single product by id (should be '/:id' for dynamic routing)
router.get('/:id', async (req, res) => {
    try {
        const users = await users.findById(req.params.id)
        if (!users) {
            return res.status(404).json({ error: 'user not found' })
        }
        res.json(users)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// POST a new product
router.post('/', async (req, res) => {
    const { userName , email , password , userId } = req.body
    try {
        const user = await Users.create({ userName , email , password , userId })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router
