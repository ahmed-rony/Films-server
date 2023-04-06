const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    uploadImg: {
        type: [String],
        required:false,
    },
    tags: {
        type: [String],
        required:false,
    },
    videoId: {
        type: String,
        required: false,
    },
    likes: {
        type: Number,
        required: false,
        default: 0,
    },
    views: {
        type: Number,
        required: false,
        default: 0,
    },

},
    { timestamps: true }
)

module.exports = mongoose.model("Project", projectSchema);