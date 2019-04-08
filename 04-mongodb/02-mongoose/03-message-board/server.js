var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');
// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/message_board');

var messageSchema = new mongoose.Schema({
    name:{type: String,required: [true, "Name should be at least 3 characters!"],minlength:3},
    message:{type: String, required: [true,"The message can't be empty"],minlength:5},
    _comments:[{type:mongoose.Schema.Types.ObjectId, ref:'Comment'}]
        
});

var Message = mongoose.model('Message', messageSchema);

var commentSchema = new mongoose.Schema({
    name:{type:String, required: [true, "Name should be at least 2 characters!"], minlength:2},
    text: {type:String, required: [true,"Comment should be at least 5 caharacters!"], minlength:5},
    _message: [{type:mongoose.Schema.Types.ObjectId, ref:'Message'}]
});

var Comment = mongoose.model('Comment', commentSchema)

// Routes

app.get('/', function(req, res) {
    
    Message.find({}).populate('_comments').exec(function(err,messages){
        if (err) {console.log(err);}
        res.render('index', { messages: messages});
    });

});


app.post("/message", function(req,res){
    var newMessage = new Message({ name: req.body.name, message: req.body.message });
    newMessage.save(function(err){
        if (err) {
            console.log(err);
            res.render('index', {errors:newMessage.errors});
        } else {
            console.log('success');
            res.redirect('/')
        }
    })
})

app.post("/comment/:id", function(req, res) {
	var messageId = req.params.id;
	Message.findOne({ _id: messageId }, function(err, message) {
		var newComment = new Comment({ name: req.body.name, text: req.body.comment });
		newComment._message = message._id;
		Message.update({ _id: message._id }, { $push: { _comments: newComment }}, function(err) {

		});
		newComment.save(function(err) {
			if (err) {
				console.log(err);
				res.render('index.ejs', { errors: newComment.errors });
			} else {
				console.log("comment added");
				res.redirect("/");
			}
		});
	});
});



 



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})