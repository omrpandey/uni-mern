const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const subscribeRoutes = require('./routes/subscribeRoutes');  // Import the subscribe route
const productRoutes = require('./routes/productRoutes');
const addressRoutes = require('./routes/addressRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const cartRoutes = require('./routes/cart'); 
const usersRoutes = require('./routes/usersRoutes');

dotenv.config();  // Load environment variables

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

connectDB();

// Routes

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors({ origin: 'http://localhost:3000'}));


// Root route
app.get('/', (req, res) => {
    res.send('MERN Backend is Running!');
});

//calling the route
app.use('/api/product',productRoutes)
app.use('/api/address',addressRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/reviews',reviewRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/cart',cartRoutes);
app.use('/subscribe', subscribeRoutes);  // Use subscribe route

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
