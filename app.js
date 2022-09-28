const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

/* app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
}); */

app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo en el puerto 3000");
});

//RUTAS
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/cursos', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/cursos.html'));
});

app.get('/descargables', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/descargables.html'));
});

app.get('/traductor', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/traductor.html'));
});

app.get('/suscripciones', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/suscripciones.html'));
});

app.get('/contacto', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/contacto.html'));
});

app.get('/registro', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './views/registro.html'));
});

app.get('/login', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/carrito-compras', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './views/carrito-compras.html'));
});
