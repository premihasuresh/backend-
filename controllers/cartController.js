const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate('items');
        res.json(cart);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.addToCart = async (req, res) => {
    const { artworkId } = req.body;

    try {
        let cart = await Cart.findOne({ user: req.user.id });

        if (!cart) {
            cart = new Cart({ user: req.user.id, items: [artworkId] });
        } else {
            cart.items.push(artworkId);
        }

        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.removeFromCart = async (req, res) => {
    const { artworkId } = req.body;

    try {
        let cart = await Cart.findOne({ user: req.user.id });

        if (!cart) {
            return res.status(404).json({ msg: 'Cart not found' });
        }

        cart.items = cart.items.filter(item => item.toString() !== artworkId);

        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};