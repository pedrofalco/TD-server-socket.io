//UTILIZAR EL MODULO "EXPRESS"
const express = require('express');

const app = express();
const server = app.listen(1111, () => console.log('listening @ 1111'));

//EN CASO DE USARLO SIN FRONT, ELIMINAR LAS SIGUIENTES DOS LINEAS
app.use(express.static('public'));
app.use(express.json({
    limit: '2mb'
}));