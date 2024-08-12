const mongoose = require('mongoose');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const userExists = await User.findOne({ email });
    
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        password: hashPass,
    });

    if (user) {
        const token = generateToken(user._id);
        return res.status(201).json({
            _id: user._id,
            email: user.email,
            token,
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
});

// Generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// Login User
const loginUser = asyncHandler(async (req, res) => { 
    
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }


    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        console.log("data2" + email + password);
        const token = generateToken(user._id);
        return res.status(200).json({
            _id: user._id,
            email: user.email,
            token,
        });
    } else {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
});

//Get all users (for testing)
const getUsers = asyncHandler(async(req, res)=>{
    const users = await User.find({});
    res.status(200).json(users);
});

const getProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

module.exports = {registerUser, loginUser, getUsers, getProfile};
