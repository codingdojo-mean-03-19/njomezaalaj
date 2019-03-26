var express = require("express");

var app = express();

app.get('/', function (request, response) {
    response.send('index.html')
  })

app.listen(8000, function(){
    console.log("Start listening on 8000");
})

app.use(express.static(__dirname + "/static"));



