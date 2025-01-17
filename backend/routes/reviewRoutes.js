const express = require('express')
const Reviews = require('../models/reviews')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ mssg: 'Reviews' })
})

router.get('/:id', async (req, res) => {
    try {
        const reviews = await reviews.findById(req.params.id)
        if (!reviews) {
            return res.status(404).json({ error: 'reviews not found' })
        }
        res.json(reviews)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// POST a new product
router.post('/', async (req, res) => {
        const { id , productId , review } = req.body
    try {
        const reviewsss = await Reviews.create({ id , productId , review })
        res.status(200).json(reviewsss)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router