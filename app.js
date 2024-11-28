require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const catRoutes = require('./routes/catroutes'); // Importa las rutas
const PORT = process.env.PORT || 3010;

// Middleware para servir archivos estáticos desde la carpeta View
app.use(express.static(path.join(__dirname, './View')));

// Endpoint para cargar datos de una API
//ruta del archivo
app.use('/api/data',catRoutes);

// Usa Helmet para proteger tu app
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});