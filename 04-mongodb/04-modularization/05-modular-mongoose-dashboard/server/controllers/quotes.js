var mongoose = require('mongoose');


// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quoting_dojo');

var quoteSchema = new mongoose.Schema({
    name:String,
    quote:String
    
});

var Quote = mongoose.model('quotes', quoteSchema);

// Routes

module.exports = {
    post_quotes: function(req,res){
        Quote.create(req.body, function(err){
            if (err){console.log(err);}
            res.redirect('/quotes');
        }); 
    },

 
    get_quotes: function(req,res){
        Quote.find({}, function(err, quotes){
            if(err) { console.log(err);}
            res.render('quotes',{ quotes: quotes });
     
        }); 

    }
}
