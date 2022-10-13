const Datastore = require('nedb');
const database = new Datastore('database.db');
database.loadDatabase();

console.log("Clearing database...");

database.remove({}, {
    multi: true
}, function(err, numRemoved) {

});

console.log("Deleted");