var animals = require('../controllers/animals.js')


// Routes

module.exports = function(app){

    app.get('/', function(req, res) {
        
            animals.find_animals(req,res);
        });
    
    
     //Create
    app.post('/', function(req, res) {
        animals.create_animals(req,res);
            });
    
    
    //New
    app.get('/new', function(req, res) {
        res.render('new');
        });
    
    //Show
    app.get('/:id', function(req, res){
        animals.show_animals(req,res);
        });
      
    
    app.get('/:id/edit/', function(req,res){
        animals.edit_animals(req,res);
        
        });
    
    
    //Update
    app.post('/:id', function(req,res){
        animals.update_animals(req,res);
        });
    
    
    //Delete
    app.post('/:id/delete', function(req,res){
        animals.delete_animals(req,res);
    
        });
    
}

