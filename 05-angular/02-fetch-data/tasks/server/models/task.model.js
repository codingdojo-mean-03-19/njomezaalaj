const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    title:{
        
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        minlength: [2, 'Title must be more than 2 characters!']
    },
    description:{
        type: String,
        trim: true,
        required: [true, 'Description is required'],
        minlength: [2, 'Description must be more than 2 characters!']
    }
   
}, {timestamps:true});

module.exports = mongoose.model('Task', TaskSchema);