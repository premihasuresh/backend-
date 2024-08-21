const mongoose = require('mongoose');

// Define the User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,  // The username is required
    trim: true,      // Trim whitespace
    minlength: 3,    // Minimum length for username
    maxlength: 50    // Maximum length for username
  },
  email: {
    type: String,
    required: true,  // The email is required
    unique: true,    // Ensure email uniqueness
    trim: true,      // Trim whitespace
    lowercase: true  // Convert to lowercase
  },
  password: {
    type: String,
    required: true,  // The password is required
    minlength: 6     // Minimum length for password
  },
  date: {
    type: Date,
    default: Date.now // Default to the current date
  }
});

// Create and export the User model
module.exports = mongoose.model('User', UserSchema);