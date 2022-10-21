## TD server socket.IO 🧦

`ES`
Template + componente para comunicar una aplicacion web o un servidor web con [TouchDesigner](https://derivative.ca/download) via [WebSockets](https://developer.mozilla.org/es/docs/Web/API/WebSockets_API). El protocolo que se usa para establecer esta comunicación es [Socket.IO](https://socket.io/).
El componente en este repositorio sirve para escuchar eventos desde TouchDesigner como también para emitir eventos. Está pensando para ser usado con una interfaz web que busque comunicarse con TouchDesigner pero sus casos de uso pueden ser varias.
Como TouchDesigner utiliza Socket.IO v2 es necesario instalar esta version en Node.js.

### Rápida instalación con Node.js y npm 🚩

Para usar este respositorio es necesario descargar [Node.js](https://nodejs.org/es/).

1. Descargar o clonar el repositorio en tu computadora.

2. Instalar las dependencias en la carpeta de destino ejecutando en la consola `npm i` o manualmente `npm i express socket.io@2.0.1`

3. `npm start` para inicilizar la app.

### Comentarios y comandos 🚏 

Para inicializar en modo *test* (la app se reiniciará cada vez que se haga un cambio en ella) ejecutar en la consola:

```
npm test
```
> 💡 Nota: para ello es necesario instalar previamente `npm nodemon -g`.

Para utilizar la interfaz gráfica abrir el navegador en:

```
http://localhost:1111
```

La carpeta `public` agrupa todos los archivos "estáticos" que se usan para el frontend como los `.html`, `.js`, `.css`, logos, videos, etc.
Modificar el archivo `index.js` para customizar el backend. En este caso, el archivo `index.html` contiene un minimo frontend para enviar un mensaje via Socket.IO. Todo esto se puede mejorar y embellecer.

Los eventos "dataToTD" y "dataFromTD" sirven para que los mensajes no entren y salgan en loop. En el caso de que se quiera que los mensajes que salgan también vuelvan a entrar, deberías modificar estos dos nombres de los eventos a un único evento (ej.: "data").

👋 *Si lo usas, si tenés algún tipo de feedback o problema, hacemelo llegar por favor :)*

---


`EN`
Template + component to communicate a web application or a web server with [TouchDesigner](https://derivative.ca/download) via [WebSockets](https://developer.mozilla.org/es/docs/Web/API/WebSockets_API). The protocol used to establish this communication is [Socket.IO](https://socket.io/).
The goal of the component in this repo is to listen for events from TouchDesigner as well as to emit events. The component is intended to be used with a web interface that seeks to communicate with TouchDesigner but its use cases can be several.
As TouchDesigner uses Socket.IO v2 it is necessary to install this version in Node.js.

### Quick Start with Node.js & npm 🚩

To use this repository you'll need to download [Node.js](https://nodejs.org/es/).

1. Download or clone the repository on your computer.

2. Install the dependencies in the target folder by running `npm i` or manually `npm i express socket.io@2.0.1` in the console.

3. `npm start` to start the app.

### Comments & commands 🚏 

In order to start in *test* mode (the app will be restarted each time a change is made to it):

```
npm test
```
> 💡 Note: it's necessary to install `npm nodemon -g` first.

To use the web UI open the browser:

```
http://localhost:1111
```

Also, the `public` folder contains all the `static` files used for the frontend such as `.html`, `.js`, `.css`, logos, videos, etc.
Feel free to modify the `index.js` file to customize your backend. In this case, the `index.html` file contains a minimal frontend to send a message via Socket.IO. It can be enhanced and beautified

The events "dataToTD" and "dataFromTD" are used to prevent messages from looping in and out. In case you want the outgoing messages to also loop back in, you should modify these two event names to a single event (e.g., "data").

👋 *If you use it or if you have any feedback or problem, please let me know :)*


📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮📮