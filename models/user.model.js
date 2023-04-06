const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
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
    profileImg: {
        type: String,
        required: false,
    },
    profileCover: {
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