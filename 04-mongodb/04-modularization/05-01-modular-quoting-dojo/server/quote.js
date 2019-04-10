var mongoose = require('mongoose');


// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quoting_dojo');

var quoteSchema = new mongoose.Schema({
    name:String,
    quote:String
    
});

module.exports = mongoose.model('quotes', quoteSchema);
