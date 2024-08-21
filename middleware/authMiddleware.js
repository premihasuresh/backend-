const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        // Check if Authorization header is present
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ msg: 'No token, authorization denied' });
        }
        
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Find the user based on the token
        req.user = await User.findById(decoded.id);
        if (!req.user) {
            return res.status(401).json({ msg: 'User not found' });
        }
        
        next();
    } catch (err) {
        console.error('Authentication error:', err); // Log the error
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = { auth };