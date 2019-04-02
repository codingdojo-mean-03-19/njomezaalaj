module.exports = function Route(app, server){

    var io = require('socket.io').listen(server)

    app.get('/', function(req,res){
        res.render("index");
    });
   
    var counter = 0;

    io.sockets.on('connection', function(socket){
        socket.on("update", function(data){
            io.emit('updated_message', {response: counter++});
        });


        socket.on("reset", function(data){
            io.emit('updated_message', {response: counter=0});

        });
    });
};
