const express = require('express')
const Product = require('../models/product')
const router = express.Router()

// GET all products (this seems like a placeholder, add a real database call)
router.get('/', (req, res) => {
    res.json({ mssg: 'Products' })
})

// GET single product by id (should be '/:id' for dynamic routing)
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }
        res.json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// POST a new product
router.post('/', async (req, res) => {
    const { productId, price, discount, Name, Image, category, priceWithCoupon, size, quantityf, discription } = req.body
    try {
        const products = await Product.create({ productId, price, discount, Name, Image, category, priceWithCoupon, size, quantityf, discription })
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router
