const express = require('express');
const Users = require('../models/users'); // Import User model
const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET single user by ID
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

// POST a new user
router.post('/', async (req, res) => {
    const { userName, email, password, userId } = req.body;
    try {
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const user = new Users({ userName, email, password, userId });
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
