// server.js
const express = require('express');
const path = require('path');
const app = express();

// Define el puerto que usará Render
const port = process.env.PORT || 3000;

// Sirve los archivos estáticos (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para servir el juego
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});
