    
const mongoose = require('mongoose');
const {Schema} = mongoose;

const NoteSchema = new Schema({
    content:{
        type: String,
        trim: true,
        required: [true, 'Content is required'],
        minlength: [5, 'Contnet must be min 5 characters!']
    },
   
}, {timestamps:true});

module.exports = mongoose.model('Note', NoteSchema);