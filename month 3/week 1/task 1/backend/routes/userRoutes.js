const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

const { registerUser, loginUser ,getUsers, getProfile } = require('../controllers/userController');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/').get(getUsers);

router.route('/profile').get(protect, getProfile);

module.exports = router;
