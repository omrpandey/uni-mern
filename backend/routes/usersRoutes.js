const express = require('express');
const Users = require('../models/users');
const router = express.Router();

// GET all users (to be used for fetching users data for Flashsaless)
router.get('/', async (req, res) => {
    try {
        const users = await Users.find(); // Find all users
        res.json(users);  // Return all users as response
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET single user by ID (if needed in the future)
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await Users.findOne({ userId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// POST a new user (this is for adding new users in the database)
router.post('/', async (req, res) => {
    const { userName, email, password, userId } = req.body;
    try {
        const user = new Users({ userName, email, password, userId });
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
