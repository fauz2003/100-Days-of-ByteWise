const getGoal =(req, res) =>{
    res.json({message:"Retrieved goal"});
}

const postGoal =(req, res) =>{
    if(!req.body.text){
        res.status(400);
        throw new Error("No data provided");
    }
    res.json({message:"Updated goal"});
}

const putGoal =(req, res) =>{
    res.json({message:`Updated goal id ${req.params.id}`});
}

const deleteGoal =(req, res) =>{
    res.json({message:`Deleted goal id ${req.params.id}`});
}

module.exports = {
    getGoal, 
    postGoal,
    putGoal,
    deleteGoal
}