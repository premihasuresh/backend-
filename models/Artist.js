const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String, required: true },
    portfolioURL: { type: String, required: true }
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;