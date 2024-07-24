const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Name is required']
    },
    age:{
        type:Number,
        required: [true, 'Age is required']
    },
    email:{
        type:String,
        required: [true, 'email is required']
    },
    gender:{
        type:String,
        required: [true, 'Gender is required']
    },
    password:{
        type:String,
        required: [true, 'password is required']
    }
})

module.exports = mongoose.model('User', userSchema);