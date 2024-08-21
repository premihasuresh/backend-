const express = require('express');
const router = express.Router();

const products = [
    {id: '1', name: 'Sunflower', price: 100, description: 'The sunflower is a tall, bright yellow annual plant known for its large flower heads and nutrient-rich seeds.'},
    {id: '2', name: 'Rose', price: 200, description: 'The rose is a fragrant, woody perennial flower known for its layered petals and vibrant colors, often symbolizing love and beauty.'},
    {id: '3', name: 'Hibiscus', price: 250, description: 'Hibiscus is a vibrant tropical plant with large, colorful flowers, often used in gardens and herbal teas.'},
    {id: '4', name: 'Bird', price: 300, description: 'Birds are warm-blooded vertebrates characterized by feathers, beaks, and a high metabolic rate, known for their ability to fly and melodic songs.'},
    {id: '5', name: 'Forest', price: 360, description: 'A forest is a dense, lush expanse of trees and undergrowth, teeming with diverse wildlife and resonating with the sounds of nature.'},
    {id: '6', name: 'Landscape', price: 400, description: 'A landscape is a picturesque view of natural scenery, encompassing mountains, valleys, rivers, and fields that create a harmonious connection between earth and sky.'},
    {id: '7', name: 'Food', price: 480, description: 'Food is a delightful array of flavors, textures, and aromas that nourish the body and bring people together in shared experiences.'},
    {id: '8', name: 'Plant', price: 380, description: 'A plant is a living organism that grows from the earth, utilizing sunlight, water, and nutrients to flourish and contribute to the ecosystem.'},
    {id: '9', name: 'House', price: 480, description: 'A village is a small, close-knit community where people live and work together, surrounded by rural landscapes and traditional ways of life.'},
    {id: '10', name: 'Villa', price: 800, description: 'A villa is a luxurious, spacious residence often situated in a scenic or tranquil setting, offering comfort, elegance, and privacy.'},
    {id: '11', name: 'Built', price: 800, description: 'A built bike refers to a bicycle that has been fully assembled, often customized or upgraded with specific parts for performance, comfort, or aesthetic appeal.'},
    {id: '12', name: 'Portrait', price: 650, description: 'An old portrait is a timeless depiction of an individual, capturing their likeness and essence from a bygone era, often evoking a sense of history and nostalgia.'},
    {id: '13', name: 'Gallery', price: 1000, description: 'A gallery is a curated space where artworks, photographs, and other creative expressions are displayed for public viewing and appreciation.'},
    {id: '14', name: 'Music', price: 750, description: 'Music is an art form composed of organized sound and silence, evoking emotions and telling stories through melody, harmony, rhythm, and timbre.'},
    {id: '15', name: 'Campfire', price: 450, description: 'A campfire is a blazing outdoor fire, often the focal point of gatherings, providing warmth, light, and a cozy atmosphere for storytelling and bonding.'},
    {id: '16', name: 'Concert', price: 600, description: 'A concert is a live musical performance featuring musicians or bands, often held in venues ranging from intimate clubs to large arenas, providing an immersive experience for audiences.'},
    {id: '17', name: 'Painting', price: 770, description: 'A painting is an artistic creation made by applying pigments to a surface, expressing ideas, emotions, and stories through color, texture, and composition.'},
    {id: '18', name: 'Still Life Photography', price: 1000, description: 'Still life photography is the art of capturing inanimate objects arranged in a purposeful composition, focusing on detail, texture, light, and shadow to create visually compelling and often symbolic images.'},
    {id: '19', name: 'Football', price: 800, description: 'Football is a dynamic and strategic sport played between two teams, where players aim to score goals by maneuvering a ball into the opposing team’s net, celebrated worldwide for its excitement and athleticism.'},
    {id: '20', name: 'Living Room', price: 1500, description: 'A living room is a welcoming and versatile space in a home, designed for relaxation and socializing, typically featuring comfortable seating, entertainment systems, and personalized decor to create a cozy and inviting atmosphere.'},
    {id: '21', name: 'Art Work', price: 250, description: 'Artwork is a creative expression manifested through various mediums such as painting, sculpture, photography, or digital art, reflecting the artist’s vision, emotions, and ideas, often evoking thought and appreciation in its audience.'},
    {id: '22', name: 'New York', price: 400, description: 'New York is a bustling, vibrant metropolis known for its iconic skyline, diverse neighborhoods, cultural landmarks, and dynamic energy, blending historic charm with modern innovation and serving as a global hub for art, commerce, and entertainment.'},
    {id: '23', name: 'Art', price: 600, description: 'Art is a diverse range of human activities and creations that express ideas, emotions, and perspectives through various forms such as painting, sculpture, music, dance, and literature, often aiming to provoke thought, evoke feelings, or simply provide aesthetic pleasure.'},
];

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

module.exports = router;