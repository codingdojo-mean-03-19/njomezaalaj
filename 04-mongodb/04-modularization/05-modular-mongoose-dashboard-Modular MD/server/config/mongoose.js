var mongoose = require('mongoose');

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/animals');



module.exports = require('mongoose')