const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Endpoint para obtener todos los productos
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

module.exports = router;
