const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (req, res) => {
    const { payment_method_id } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 50000, // Example amount in the smallest currency unit (paise)
            currency: 'inr',
            payment_method: payment_method_id,
            confirmation_method: 'manual',
            confirm: true,
        });

        res.status(200).json(paymentIntent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};