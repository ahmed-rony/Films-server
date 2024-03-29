const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Message", messageSchema);