//UTILIZAR EL MODULO "EXPRESS"
const express = require('express');
const socket = require("socket.io");

//EXPRESS
const app = express();
const server = app.listen(1111, () => console.log('listening @ 1111 --> http://localhost:1111'));

//EN CASO DE USARLO SIN FRONT, ELIMINAR LAS SIGUIENTES DOS LINEAS
app.use(express.static('public'));
app.use(express.json({
    limit: '2mb'
}));


//SOCKET.IO
const io = socket(server);
io.sockets.on('connection', newConnection);


function newConnection(socket) {
    console.log('new connection: ' + socket.id);

    socket.on('data', (data) => {
        console.log(data);

        io.emit('data', data);
    });
};