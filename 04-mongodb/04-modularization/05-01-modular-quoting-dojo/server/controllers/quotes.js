var Quote = require('../models/quote.js');

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
