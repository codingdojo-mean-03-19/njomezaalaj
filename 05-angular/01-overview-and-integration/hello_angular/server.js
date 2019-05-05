var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.urlencoded({extended: true}));
var session = require('express-session');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
var port = process.env.PORT || 8000;
app.use(express.static( __dirname + '/public/dist/public' ));


app.use(session({
    secret: 'thisIsSecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

  app.get('/', function(req,res){
      //var sessData = req.session;
      if(!req.session.counter){
        req.session.counter = 1;
      }
      else{
        req.session.counter += 1;
      }
      res.render('index', {counter: req.session.counter});
  });


  app.post('/reset', function(req, res){
    req.session.counter = null;
    res.redirect("/");
  });

  app.post('/dub', function(req,res){
    req.session.counter += 1;
    res.redirect('/');
});




  app.listen(port, () => console.log('Express server listening on port 8000'));
