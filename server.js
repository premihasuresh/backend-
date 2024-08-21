const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy in-memory user store for demonstration purposes
const users = [];

// Registration endpoint
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    // Add user to the store
    users.push({ username, email, password });
    res.status(201).json({ message: 'User registered successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});