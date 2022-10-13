const Datastore = require('nedb');
const database = new Datastore('database.db');
database.loadDatabase();

console.log("Clearing database...");
console.log("Deleted");

database.remove({}, {
    multi: true
}, function(err, numRemoved) {

});