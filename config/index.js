const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const checkoutRoutes = require('./routes/checkout');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/checkout', checkoutRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));