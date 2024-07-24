const express = require('express');
const router = express.Router();
const {getUser, putUser, postUser, deleteUser} = require('../controllers/userController');

router.route('/').get(getUser).post(postUser);
router.route('/:id').put(putUser).delete(deleteUser);

module.exports = router;
