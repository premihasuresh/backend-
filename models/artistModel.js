const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  portfolio: [
    {
      title: String,
      image: String,
      description: String,
    }
  ],
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;