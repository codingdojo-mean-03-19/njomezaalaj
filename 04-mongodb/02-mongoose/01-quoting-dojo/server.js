var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');
// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quoting_dojo');

var quoteSchema = new mongoose.Schema({
    name:String,
    quote:String
    
});

var Quote = mongoose.model('quotes', quoteSchema);

// Routes

app.get('/', function(req, res) {
    res.render('index');
})
 
app.post('/quotes', function(req, res) {
    Quote.create(req.body, function(err){
        if (err){console.log(err);}
        res.redirect('/quotes');
    });
    
});

app.get('/quotes', function(req, res) {

    Quote.find({}, function(err, quotes){
        if(err) { console.log(err);}
        res.render('quotes',{ quotes: quotes });
    });
    
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
