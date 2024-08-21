const mongoose = require('mongoose');

const ArtworkSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  artist: { type: String, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Artwork', ArtworkSchema);