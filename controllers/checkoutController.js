const Order = require('../models/Order');
const Razorpay = require('razorpay');
const stripe = require('stripe')('your-secret-key-here');

const razorpay = new Razorpay({
  key_id: 'your-key-id',
  key_secret: 'your-key-secret',
});

exports.createPaymentIntent = async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createOrder = async (req, res) => {
  const { amount, userId } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: 'receipt#1',
    });

    const newOrder = new Order({
      userId,
      amount,
      currency: 'INR',
      paymentId: order.id,
    });

    await newOrder.save();
    res.json(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
};