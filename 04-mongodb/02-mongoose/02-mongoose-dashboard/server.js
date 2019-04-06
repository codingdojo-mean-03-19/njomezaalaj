var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');
// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/animals');

var animalsSchema = new mongoose.Schema({
    type:String,
    name:String,
    weight:String,
    age:Number
    
});

var Animals = mongoose.model('animals', animalsSchema);

// Routes

app.get('/', function(req, res) {
    Animals.find({}, function(err,animals){
        if (err) {console.log(err);}
        res.render('index', { animals: animals});
    });

});



 //Create
app.post('/', function(req, res) {
    Animals.create(req.body, function(err, result){
        if (err){console.log(err);}
        res.redirect('/');
    });
});

//New
app.get('/new', function(req, res) {
    res.render('new');
    });

//Show
app.get('/:id', function(req, res){
    Animals.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('show', { animals: response[0] });
    });
  });




app.get('/:id/edit/', function(req,res){
    Animals.find({_id: req.params.id }, function(err,response) {
        if(err) { console.log(err);}
        res.render('update',{animals:response[0]});
    });
});


//Update
app.post('/:id', function(req,res){
    Animals.update({_id: req.params.id}, req.body, function(err, result){
        if (err) { console.log(err);}
        res.redirect('/')
    });
});

//Delete
app.post('/:id/delete', function(req,res){
    Animals.remove({_id:req.params.id}, function(err, result){
        if(err){console.log(err);}
        res.redirect('/');
    });
});
    



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})