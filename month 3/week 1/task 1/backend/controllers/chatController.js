const Conversation = require('../models/conversationModel');
const Chat = require('../models/chatModel');

const createChat = async (req, res) => {
    try {
        const userId = req.user._id;

        const chat = await Chat.create({
            user: userId,
        });

        res.status(201).json(chat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllChats = async (req, res) => {
    try {
        const chats = await Chat.find({ user: req.user._id }).sort({ createdAt: -1 });

        res.json(chats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addConversation = async (req, res) => {
    try {
        const chat = await Chat.findById(req.params.id);

        if (!chat) {
            return res.status(404).json({ message: 'Chat not found' });
        }

        const conversation = await Conversation.create({
            chat: chat._id,
            question: req.body.question,
            answer: req.body.answer,
        });

        const updatedChat = await Chat.findByIdAndUpdate(
            req.params.id,
            { latestMessage: req.body.answer },
            { new: true }
        );

        if (!updatedChat) {
            return res.status(400).json({ message: 'Failed to update chat with latest message' });
        }

        res.status(201).json({ conversation, updatedChat });
    } catch (error) {
        console.error('Error in addConversation:', error);
        res.status(500).json({ message: error.message });
    }
};

const getConversation = async (req, res) =>{
    try {
        const conversation = await Conversation.find({chat:req.params.id});

        if (!conversation) {
            return res.status(404).json({ message: 'Conversation not found' });
        }

        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteChat = async(req, res)=>{
    try {
        const chat = await Chat.findById(req.params.id);

        if(!chat){
            return res.status(404).json({message: 'Chat not found'});
        }

        if(chat.user.toString() !== req.user._id.toString()){
            return res.status(401).json({message: 'You are not authorized to delete this chat'});
        }

        await chat.deleteOne();

        res.status(200).json({message: 'Chat deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});   
    }
}


module.exports = { createChat, getAllChats, addConversation, getConversation , deleteChat};
