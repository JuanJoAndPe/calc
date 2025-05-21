const proxyService = require('../services/proxyService');

const proxyRequest = async (req, res) => {
  try {
    const data = await proxyService.makeRequest(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { proxyRequest };
