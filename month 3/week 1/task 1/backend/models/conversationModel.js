const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema({
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Chat',
    },
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
});

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;