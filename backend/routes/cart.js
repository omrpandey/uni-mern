const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const Product = require('../models/product');

// Route to add a product to the cart (no userId)
router.post('/add', async (req, res) => {
// Enhanced Add to Cart Route
router.post('/cart/add', async (req, res) => {
    try {
        const { productId, userId, quantity = 1 } = req.body;

        // Validation
        if (!productId || !userId) {
            return res.status(400).json({ error: 'Product ID and User ID are required' });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Stock validation
        if (product.countInStock < quantity) {
            return res.status(400).json({ 
                error: `Only ${product.countInStock} items available in stock`
            });
        }

        // Find user's cart or create new
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, products: [] });
        }

        // Check existing product
        const existingProduct = cart.products.find(p => 
            p.productId.toString() === productId
        );

        if (existingProduct) {
            // Update existing item
            const newQuantity = existingProduct.quantity + quantity;
            if (newQuantity > product.countInStock) {
                return res.status(400).json({
                    error: `Cannot add more than ${product.countInStock} items`
                });
            }
            existingProduct.quantity = newQuantity;
            existingProduct.subTotal = (product.discountedPrice || product.price) * newQuantity;
        } else {
            // Add new item
            cart.products.push({
                productId: product._id,
                name: product.name,
                price: product.discountedPrice || product.price,
                quantity,
                imageUrl: product.images?.[0] || '',
                subTotal: (product.discountedPrice || product.price) * quantity,
                countInStock: product.countInStock
            });
        }

        await cart.save();
        
        // Calculate totals
        const cartCount = cart.products.reduce((total, p) => total + p.quantity, 0);
        const totalAmount = cart.products.reduce((total, p) => total + p.subTotal, 0);

        res.status(200).json({ 
            message: 'Product added to cart',
            cart: await Cart.populate(cart, { path: 'products.productId' }),
            cartCount,
            totalAmount
        });

    } catch (error) {
        console.error('Cart Error:', error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// Enhanced Update Cart Route
router.put('/cart/update', async (req, res) => {
    try {
        const { productId, userId, quantity } = req.body;

        // Validation
        if (!productId || !userId || typeof quantity !== 'number' || quantity < 0) {
            return res.status(400).json({ error: 'Invalid request parameters' });
        }

        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        const productIndex = cart.products.findIndex(p => 
            p.productId.toString() === productId
        );

        if (productIndex === -1) {
            return res.status(404).json({ error: 'Product not in cart' });
        }

        // Handle quantity update
        if (quantity === 0) {
            // Remove product if quantity is 0
            cart.products.splice(productIndex, 1);
        } else {
            // Validate stock
            const product = await Product.findById(productId);
            if (quantity > product.countInStock) {
                return res.status(400).json({
                    error: `Only ${product.countInStock} items available`
                });
            }

            // Update quantity and subtotal
            cart.products[productIndex].quantity = quantity;
            cart.products[productIndex].subTotal = 
                cart.products[productIndex].price * quantity;
        }

        await cart.save();

        // Calculate totals
        const cartCount = cart.products.reduce((t, p) => t + p.quantity, 0);
        const totalAmount = cart.products.reduce((t, p) => t + p.subTotal, 0);

        res.json({ 
            message: 'Cart updated',
            cart: await Cart.populate(cart, { path: 'products.productId' }),
            cartCount,
            totalAmount
        });

    } catch (error) {
        console.error('Update Error:', error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// Delete Cart Route
router.delete('/cart', async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ error: 'User ID required' });
        }

        const cart = await Cart.findOneAndDelete({ userId });
        res.json({ message: 'Cart cleared', cart });

    } catch (error) {
        console.error('Delete Cart Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

    // Add this new GET route to fetch cart contents
router.get('/cart', async (req, res) => {
    try {
        const { userId } = req.query;

        // Validation
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        // Find user's cart
        const cart = await Cart.findOne({ userId })
            .populate('products.productId')
            .exec();

        if (!cart) {
            return res.status(200).json({
                message: 'Cart is empty',
                products: [],
                cartCount: 0,
                totalAmount: 0
            });
        }

        // Calculate totals
        const cartCount = cart.products.reduce((total, p) => total + p.quantity, 0);
        const totalAmount = cart.products.reduce((total, p) => total + p.subTotal, 0);

        res.status(200).json({
            message: 'Cart retrieved successfully',
            cart,
            cartCount,
            totalAmount
        });

    } catch (error) {
        console.error('Get Cart Error:', error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

module.exports = router;