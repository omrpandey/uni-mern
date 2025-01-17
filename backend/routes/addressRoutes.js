const express = require('express')
const Address = require('../models/address')
const router = express.Router()

// GET all products (this seems like a placeholder, add a real database call)
router.get('/', (req, res) => {
    res.json({ mssg: 'Address' })
})

// GET single product by id (should be '/:id' for dynamic routing)
router.get('/:id', async (req, res) => {
    try {
        const address = await address.findById(req.params.id)
        if (!address) {
            return res.status(404).json({ error: 'address not found' })
        }
        res.json(address)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// POST a new product
router.post('/', async (req, res) => {
    const { id , address , userId } = req.body
    try {
        const addresss = await Address.create({ id , address , userId })
        res.status(200).json(addresss)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router