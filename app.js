const express = require('express')
const app = express()
const path = require('path');
const PORT = 3000;


// Configurar la carpeta 'public' como estática
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/home'));


// Configurar las rutas
const mainRoutes = require('./src/routes/mainRoutes.js')
app.use('/', mainRoutes)


// Iniciar el servidor
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en puerto: ${PORT}`)
})