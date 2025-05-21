const bcrypt = require('bcrypt');
require('dotenv').config();

const users = [
  {
    id: 1,
    username: process.env.ADMIN_USER || 'admin',
    passwordHash: bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'admin123', 10),
    role: 'admin'
  },
  {
    id: 2,
    username: process.env.ANALYST_USER || 'analista',
    passwordHash: bcrypt.hashSync(process.env.ANALYST_PASSWORD || 'analista123', 10),
    role: 'analyst'
  }
];

module.exports = users;
