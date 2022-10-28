//requiring mongoose to connect to database
const mongoose = require('mongoose');

//connecting to localhost db
mongoose.connect('mongodb://localhost/todo-app-db');

//creating db
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to db'));

db.once('open', function(){
    console.log('Connected to MongoDB successfully');
})

module.exports = db;