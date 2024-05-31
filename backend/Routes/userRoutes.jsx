const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Endpoint para registro de usuario
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.status(201).send(user);
});

// Endpoint para login de usuario
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && user.password === password) {
    res.send(user);
  } else {
    res.status(401).send({ message: 'Email o contraseña incorrectos' });
  }
});

module.exports = router;
