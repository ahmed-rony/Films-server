const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new mongoose.Schema({
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
    minimum: {
        type: Number,
        required: true,
        default: 5,
    },
    maximum: {
        type: Number,
        required:false,
    },
    startingDate: {
        type: String,
        required:true,
    },
    closingDate: {
        type: String,
        required:false,
    },
    location: {
        type: String,
        required: true,
    },
    contract: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: false,
    },
    skillLevel: {
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

module.exports = mongoose.model("Job", jobSchema);