const mongoose = require('mongoose');
const { Schema } = mongoose;

const magazineSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    userPic: {
        type: String,
        required: true,
    },
    userName: {
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
    magazineCover: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required:true,
    },

},
    { timestamps: true }
)

module.exports = mongoose.model("Magazine", magazineSchema);