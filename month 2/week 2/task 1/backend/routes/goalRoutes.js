const express = require('express');
const router = express.Router();
const {getGoal, postGoal, putGoal, deleteGoal} = require('../controllers/goalController')

router.route('/').get(getGoal).post(postGoal);
router.route('/:id').put(putGoal).delete(deleteGoal);

module.exports = router;