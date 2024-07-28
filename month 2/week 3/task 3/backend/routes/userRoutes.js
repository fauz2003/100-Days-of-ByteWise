const express = require('express');
const router = express.Router();
const {getUser, putUser, postUser, deleteUser, registerUser, loginUser} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware'); 

router.route('/').get(getUser).post(postUser);
router.route('/:id').put(protect,putUser).delete(protect,deleteUser);
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

module.exports = router;
