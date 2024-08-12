const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    latestMessage: {
        type: String,
        default: 'New Chat',
    },
},
{
    timestamps: true,
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;