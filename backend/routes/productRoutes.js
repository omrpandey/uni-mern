const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// GET single product by id
router.get('/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await Product.findOne({ productId });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// POST a new product
router.post('/', async (req, res) => {
    const { productId, price, discount, Name, Image, category, priceWithCoupon, size, quantity, discription } = req.body;
    try {
        const product = new Product({
            productId,
            price,
            discount,
            Name,
            Image,
            category,
            priceWithCoupon,
            size,
            quantity,
            discription
        });
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;