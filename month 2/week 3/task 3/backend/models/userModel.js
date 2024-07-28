const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required: [true, 'email is required'],
        unique: true
    },
    password:{
        type:String,
        required: [true, 'password is required']
    }
});

module.exports = mongoose.model('User', userSchema);