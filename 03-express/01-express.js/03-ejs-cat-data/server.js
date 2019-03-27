var express = require("express");

var app = express();





app.use(express.static(__dirname + "/static"));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


app.get('/', function (request, response) {
    response.render('index.html')
  })

app.get("/cats", function(request,response){
    response.render('cats');
});




app.get("/cuddles", function (request, response){
    // hard-coded data
    var details_array = [
        {favorite_food: "Spaghetti", age: 3, sleeping_spots:"under the bed",image_link:"/images/cat1.jpg"}
        
    ];
    response.render('details', {details: details_array});

});

app.get("/simba", function (request, response){
    // hard-coded data
    var details_array = [
        {favorite_food: "Meat", age: 3, sleeping_spots:"sofa",image_link:"/images/cat2.jpg"}
        
    ];
    response.render('details', {details: details_array});

});

app.get("/tom", function (request, response){
    // hard-coded data
    var details_array = [
        {favorite_food: "Cheese", age: 3, sleeping_spots:"on the floor",image_link:"/images/cat1.jpg"}
        
    ];
    response.render('details', {details: details_array});

});

app.get("/harry", function (request, response){
    // hard-coded data
    var details_array = [
        {favorite_food: "Eggs", age: 3, sleeping_spots:"under the bed",image_link:"/images/cat1.jpg"}
        
    ];
    response.render('details', {details: details_array});

});


app.listen(8000, function(){
    console.log("Start listening on 8000");
})