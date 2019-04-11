var mongoose = require('../config/mongoose.js')

var animalsSchema = new mongoose.Schema({
    type:String,
    name:String,
    weight:String,
    age:Number
    
});

module.exports = mongoose.model('animals', animalsSchema);
