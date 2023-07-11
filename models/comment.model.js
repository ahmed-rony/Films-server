const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new mongoose.Schema({
    projectId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Comment", commentSchema);