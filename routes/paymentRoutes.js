const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Route to create a Razorpay order
router.post('/order', async (req, res) => {
    const { amount } = req.body;
    const options = {
        amount: amount * 100, // amount in paise
        currency: 'INR',
        receipt: `receipt_order_${Math.random() * 1000}`,
    };

    try {
        const order = await razorpay.orders.create(options);
        res.status(200).json(order);
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({ error: 'Something went wrong in creating the order' });
    }
});

// Route to verify Razorpay payment
app.post('/api/payment/verify', (req, res) => {
    const receivedSignature = req.headers['x-razorpay-signature'];
    const { razorpay_order_id, razorpay_payment_id } = req.body;

    if (!receivedSignature || !razorpay_order_id || !razorpay_payment_id) {
        return res.status(400).send('Invalid request');
    }

    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generatedSignature = hmac.digest('hex');

    if (receivedSignature === generatedSignature) {
        console.log('Payment verification successful');
        // Optionally process additional events or update your database here
        res.status(200).send('Event received');
    } else {
        console.error('Payment verification failed');
        res.status(400).send('Payment verification failed');
    }
});

module.exports = router;
