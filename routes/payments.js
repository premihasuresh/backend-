const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/checkout', async (req, res) => {
    const { amount, paymentMethodId } = req.body;

    if (!amount || !paymentMethodId) {
        return res.status(400).json({ error: 'Missing amount or payment method ID' });
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method: paymentMethodId,
            confirm: true,
        });
        res.json({ success: true, paymentIntent });
    } catch (error) {
        console.error("Error handling Stripe payment:", error);
        res.status(500).json({ error: 'Error handling Stripe payment', details: error.message });
    }
});

module.exports = router;