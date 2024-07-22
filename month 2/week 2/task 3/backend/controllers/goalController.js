const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const { text } = require('express');

//CRUD OPERATIONS
const getGoal = asyncHandler(async (req, res) =>{

    const goal = await Goal.find();
    
    res.json(goal);
})

const postGoal = asyncHandler(async(req, res) =>{
    if(!req.body.text){
        res.status(400);
        throw new Error("No data provided");
    }

    const goal = await Goal.create({
        text:req.body.text
    })
    
    res.json(goal);
})

const putGoal = asyncHandler(async(req, res) =>{

    const goal =  await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error('PLease enter a value');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })
     res.status(200).json(updatedGoal);
})

const deleteGoal = asyncHandler(async(req, res) =>{
    const goal = await Goal.findById(req.params.id);
    
    if(!goal){
        res.status(400);
        throw new Error('PLease enter a value');
    }

    await goal.deleteOne();

    res.json({id:req.params.id});
})

module.exports = {
    getGoal, 
    postGoal,
    putGoal,
    deleteGoal
}