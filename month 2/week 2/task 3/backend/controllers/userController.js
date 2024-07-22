const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register User
const registerUser = asyncHandler(async(req, res)=>{

    const {name, email, password} = req.body;
    const hashPass = await bcrypt.hash(password, 10);
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!passwordPattern.test(password)) {
        res.status(400);
        throw new Error("Password must be at least 8 characters long and contain at least one number and one special character");
    }

    const Existuser = await User.findOne({email});
    
    if (Existuser){
        res.status(400);
        throw new Error("User already exists");
    }
    
    const token = await generateToken(req.params.id);
    const user = await User.create({
        name,
        email,
        password:hashPass
    });

    res.status(200).json({user, token});

})

//Login User
const loginUser = asyncHandler(async(req, res)=>{
    const {_id, email, password} = req.body;

    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password,user.password))){
        const token = await generateToken(user._id);
        res.status(200).json(token);
    }else{
        res.status(401);
        throw new Error("Invalid email or password");
    }

})

//Generate Token
const generateToken= async(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn:'30d',
    });
}
//CRUD OPERATIONS
const getUser = asyncHandler(async (req, res) =>{
    const user = await User.find();

    res.status(200).json(user);
})

const postUser = asyncHandler(async (req, res) =>{
    if (!req.body.name || !req.body.email || !req.body.password){
        res.status(400);
        throw new Error("Please enter something");
    }

    const hashPass = await bcrypt.hash(req.body.password, 12);

    const user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashPass
    });

    res.status(200).json({user});
})

const putUser = asyncHandler(async (req, res) =>{
    const user = await User.findById(req.params.id);
    
    if(!user){
        res.status(400);
        throw new Error("Please enter a value");
    }
    
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    });

    res.status(200).json(updatedUser);
})

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if(!user){
        res.status(400);
        throw new Error("Please enter a value");
    }

    await user.deleteOne();

    res.status(200).json({id:req.params.id});

})

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
    registerUser,
    loginUser
}