const express = require('express')
const Orders = require('../models/orders')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ mssg: 'Orders' })
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const orders = await Orders.findOne({id});
        if (!orders) {
            return res.status(404).json({ error: 'order not found' })
        }
        res.json(orders)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// POST a new product
router.post('/', async (req, res) => {
    const { id , productName } = req.body
    try {
        const ordersss = new Orders({ id , productName });
        await ordersss.save();
        res.status(200).json(ordersss)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router