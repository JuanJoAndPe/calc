const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const users = require('../config/users');
require('dotenv').config();

const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ error: 'Usuario no encontrado' });

  if (!bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ error: 'Contraseña incorrecta' });
  }

  const token = jwt.sign(
    { userId: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '1h' }
  );

  res.json({ token });
};

const getProtected = (req, res) => {
  res.json({ message: `Hola ${req.user.username}, tienes rol ${req.user.role}` });
};

module.exports = { login, getProtected };
