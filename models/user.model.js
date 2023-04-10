const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    talentTitle: {
        type: String,
        required: false,
    },
    profilePic: {
        type: String,
        required: false,
    },
    profileCover: {
        type: String,
        required: false,
    },
    availability: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    language: {
        type: [String],
        required: false,
    },
    skills: {
        type: [String],
        required: false,
    },
    skillLevel: {
        type: [String],
        required: false,
    },
    contract: {
        type: String,
        required: false,
    },
    about: {
        type: String,
        required: false,
    },
    isTalent:{
        type: Boolean,
        default: false,
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("User", userSchema);