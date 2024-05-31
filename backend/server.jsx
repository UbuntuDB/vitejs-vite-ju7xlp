const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes.jsx');
const productRoutes = require('./routes/productRoutes.jsx');

const app = express();

app.use(express.json());

mongoose.connect('your-mongo-db-uri', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
