
var Animals = require('../models/animal.js')

// Routes
module.exports ={
    find_animals: function(req, res) {
        Animals.find({}, function(err,animals){
            if (err) {console.log(err);}
            res.render('index', { animals: animals});
        });
    
    },

    create_animals: function(req, res) {
        Animals.create(req.body, function(err, result){
            if (err){console.log(err);}
            res.redirect('/');
        });
    },

    
    show_animals:  function(req, res){
        Animals.find({ _id: req.params.id }, function(err, response) {
          if (err) { console.log(err); }
          res.render('show', { animals: response[0] });
        });
      },

    edit_animals: function(req,res){
        Animals.find({_id: req.params.id }, function(err,response) {
            if(err) { console.log(err);}
            res.render('update',{animals:response[0]});
        });
    },
        
    update_animals: function(req,res){
        Animals.update({_id: req.params.id}, req.body, function(err, result){
            if (err) { console.log(err);}
            res.redirect('/')
        });
    },
    
    delete_animals:  function(req,res){
        Animals.remove({_id:req.params.id}, function(err, result){
            if(err){console.log(err);}
            res.redirect('/');
        });
    }
    
}
