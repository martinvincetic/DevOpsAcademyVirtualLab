// Retrieve
var MongoClient = require('mongod').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/local", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
