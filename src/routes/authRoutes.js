const express = require('express');
const { login, getProtected } = require('../controllers/authController');
const authenticateJWT = require('../middlewares/authenticateJWT');

const router = express.Router();

router.post('/login', login);
router.get('/protected', authenticateJWT, getProtected);

module.exports = router;
