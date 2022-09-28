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

app.get('/creatucuenta', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/creatucuenta.html'));
});

app.get('/ingresar', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/ingresar.html'));
});

app.get('/ayuda', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/ayuda.html'));
});

app.get('/ofertas', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/ofertas.html'));
});

app.get('/tiendasoficiales', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/tiendasoficiales.html'));
});

app.get('/todoslosproductos', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './views/todoslosproductos.html'));
});

app.get('/vender', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './views/vender.html'));
});