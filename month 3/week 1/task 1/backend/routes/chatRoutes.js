const express = require('express');
const router = express.Router();
const { createChat, getAllChats, addConversation, getConversation, deleteChat } = require('../controllers/chatController');
const { protect } = require('../middleware/auth');

router.route('/new').post(protect, createChat);
router.route('/all').get(protect, getAllChats);
router.route('/:id').post(protect, addConversation);
router.route('/:id').get(protect, getConversation);
router.route('/:id').delete(protect, deleteChat);



module.exports = router;