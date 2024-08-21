const Artwork = require('../models/Artwork');

exports.getArtworks = async (req, res) => {
    try {
        const artworks = await Artwork.find().populate('artist', 'name');
        res.json(artworks);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.addArtwork = async (req, res) => {
    const { title, description, price, image, category } = req.body;

    try {
        const artwork = new Artwork({
            title,
            artist: req.user.id,
            description,
            price,
            image,
            category,
        });

        await artwork.save();
        res.json(artwork);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.updateArtwork = async (req, res) => {
    const { title, description, price, image, category } = req.body;

    try {
        let artwork = await Artwork.findById(req.params.id);

        if (!artwork) {
            return res.status(404).json({ msg: 'Artwork not found' });
        }

        if (artwork.artist.toString() !== req.user.id) {
            return res.status(403).json({ msg: 'User not authorized' });
        }

        if (title) artwork.title = title;
        if (description) artwork.description = description;
        if (price) artwork.price = price;
        if (image) artwork.image = image;
        if (category) artwork.category = category;

        await artwork.save();
        res.json(artwork);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.deleteArtwork = async (req, res) => {
    try {
        let artwork = await Artwork.findById(req.params.id);

        if (!artwork) {
            return res.status(404).json({ msg: 'Artwork not found' });
        }

        if (artwork.artist.toString() !== req.user.id) {
            return res.status(403).json({ msg: 'User not authorized' });
        }

        await artwork.remove();
        res.json({ msg: 'Artwork removed' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};