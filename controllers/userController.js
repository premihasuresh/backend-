const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.updateUserProfile = async (req, res) => {
    const { name, bio, portfolio } = req.body;

    try {
        const user = await User.findById(req.user.id);

        if (name) user.name = name;
        if (bio) user.bio = bio;
        if (portfolio) user.portfolio = portfolio;

        await user.save();
        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};