var mongoose = require('../config/mongoose.js')

var quoteSchema = new mongoose.Schema({
    name:String,
    quote:String
    
});

module.exports = mongoose.model('quotes', quoteSchema);
