const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    text:{
        type:String, 
        required:true
    }
}, {
    timestamps:true
});

module.exports = mongoose.model('Goal', goalSchema);