const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const proxyRoutes = require('./routes/proxyRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use(authRoutes);
app.use(proxyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
