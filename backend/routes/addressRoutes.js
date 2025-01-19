const express = require('express')
const Address = require('../models/address')
const Users = require('../models/users')
const router = express.Router()

// GET all products (this seems like a placeholder, add a real database call)
router.get('/', (req, res) => {
    res.json({ mssg: 'Address' })
})

// GET single product by id (should be '/:id' for dynamic routing)
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const address = await Address.findOne({id});
        if (!address) {
            return res.status(404).json({ error: 'address not found' });
        }
        res.json(address);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

//POST a new address
router.post('/', async (req, res) => {
    const { id, address, userId } = req.body;

    try {
        // Check if userId exists in the Users collection
        const user = await Users.findOne({ userId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create a new Address with the validated userId
        const newAddress = new Address({
            id,
            address,
            userId: user._id,  // Use the ObjectId of the user
        });

        await newAddress.save();
        res.status(200).json(newAddress);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router