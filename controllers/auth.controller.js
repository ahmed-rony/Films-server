const User = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createError = require("../utilities/createError");

const register = async (req, res, next) => {
    try {
        const hashPassword = bcrypt.hashSync(req.body.password, 7);
        
        const newUser = new User({
            ...req.body,
            password: hashPassword,
        });
        await newUser.save();
        res.status(201).send('User has been created')
    } catch (error) {
        next(error);
    }
}
const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user) return next(createError(404, 'User not found'));

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isCorrect) return next(createError(400, 'Wrong password or username!'));

        const token = jwt.sign({
            id: user._id,
            isTalent: user.isTalent,
        }, process.env.JWT_KEY)

        const {password, ...info} = user._doc;
        res.cookie("accessToken", token,{
            httpOnly: true,
        }).status(200).send(info);
    } catch (error) {
        next(error);
    }
}
const logout = async (req, res,next) => {
    res.clearCookie("accessToken",{
        sameSite: "none",
        secure: true,
    }).status(200).send("Logged out.");
}

module.exports = { register, login, logout };