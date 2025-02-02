require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/cartDB';

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define a Cart Item Schema
const cartItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, required: true, min: 1 },
  giftWrap: { type: Boolean, default: false },
});

// Create a Cart Model
const CartItem = mongoose.model('CartItem', cartItemSchema);

// API Endpoints

// Get all cart items
app.get('/api/cart', async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cart items', error: err.message });
  }
});

// Add an item to the cart
app.post('/api/cart', async (req, res) => {
  const { productId, name, price, quantity } = req.body;

  if (!productId || !name || price == null || !quantity) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    let existingItem = await CartItem.findOne({ productId });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
    } else {
      const newItem = new CartItem({ productId, name, price, quantity });
      await newItem.save();
    }

    res.status(200).json({ message: 'Item added to cart' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding item to cart', error: err.message });
  }
});

// Update an item in the cart
app.put('/api/cart/:id', async (req, res) => {
  const { id } = req.params;
  const { quantity, giftWrap } = req.body;

  if (quantity !== undefined && quantity < 1) {
    return res.status(400).json({ message: 'Quantity must be at least 1' });
  }

  try {
    const item = await CartItem.findById(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    if (quantity !== undefined) item.quantity = quantity;
    if (giftWrap !== undefined) item.giftWrap = giftWrap;
    await item.save();

    res.status(200).json({ message: 'Cart item updated' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating item', error: err.message });
  }
});

// Remove an item from the cart
app.delete('/api/cart/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await CartItem.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ message: 'Error removing item', error: err.message });
  }
});

// Checkout
app.post('/api/cart/checkout', async (req, res) => {
  try {
    await CartItem.deleteMany(); // Clear the cart after checkout
    res.status(200).json({ message: 'Checkout successful' });
  } catch (err) {
    res.status(500).json({ message: 'Error during checkout', error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
