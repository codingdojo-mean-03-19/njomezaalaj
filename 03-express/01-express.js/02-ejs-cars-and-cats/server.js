var express = require("express");

var app = express();




app.listen(8000, function(){
    console.log("Start listening on 8000");
})

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static/images"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it


app.get('/', function (request, response) {
    responde.render('index')
  })


// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


app.get("/cars", function (request, response){
    // hard-coded user data
    response.send("cars");
    
})
