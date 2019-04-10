var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

require('./server/config/routes.js')(app)


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
