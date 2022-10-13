//UTILIZAR EL MODULO "EXPRESS"
const express = require('express');
const Datastore = require('nedb');


//EXPRESS
const app = express();
const server = app.listen(1111, () => console.log('listening @ 1111 --> http://localhost:1111'));
app.use(express.json({
    limit: '1mb'
}));

//NEDB
const database = new Datastore('database.db');
database.loadDatabase();


//API POST ENDPOINT
app.post('/api', (request, response) => {

    //REQUEST
    const data = request.body;
    const txt = JSON.stringify(data.message);

    console.log(`post message: ${txt}`);

    //PROCESS
    database.insert(data);

    //RESPONSE
    response.json(data);

});


//API GET ENDPOINT
app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});