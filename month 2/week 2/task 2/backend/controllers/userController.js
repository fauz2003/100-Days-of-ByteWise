const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const getUser = asyncHandler(async (req, res) =>{
    const user = await User.find();

    res.status(200).json(user);
})

const postUser = asyncHandler(async (req, res) =>{
    if (!req.body.name || !req.body.age || !req.body.email || !req.body.gender || !req.body.password){
        res.status(400);
        throw new Error("Please enter something");
    }

    const hashPass = await bcrypt.hash(req.body.password, 12);

    const user = await User.create({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        gender:req.body.gender,
        password:hashPass
    });

    res.status(200).json(user);
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
    deleteUser
}