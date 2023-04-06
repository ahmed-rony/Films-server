const mongoose = require('mongoose');
const { Schema } = mongoose;

const conversationSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    talentId: {
        type: String,
        required: true,
    },
    companyId: {
        type: String,
        required: true,
    },
    readByTalent: {
        type: Boolean,
        required: true,
    },
    readByCompany: {
        type: Boolean,
        required: true,
    },
    lastMessage: {
        type: String,
        required: false,
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Conversation", conversationSchema);