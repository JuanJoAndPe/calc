const express = require('express');
const { proxyRequest } = require('../controllers/proxyController');
const authenticateJWT = require('../middlewares/authenticateJWT');

const router = express.Router();

router.post('/proxy', authenticateJWT, proxyRequest);

module.exports = router;
