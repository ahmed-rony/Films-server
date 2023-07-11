const commentModel = require("../models/comment.model");
const User = require("../models/user.model");
const createError = require("../utilities/createError");

const createComment = async (req, res, next) => {
    try {
        const user = await User.findById(req.body.userId)
        if (user.isTalent) return next(createError(403, "Talents can't make a comment. "));

        const checkCommentor = await commentModel.findOne({
            projectId: req.body.projectId,
            userId: req.body.userId,
        })
        if (checkCommentor) return next(createError(403, "You've already created a comment."));
        
        const newComment = new commentModel(req.body);
        const savedComment = await newComment.save();
        res.status(201).send(savedComment)
    } catch (error) {
        next(error);
    }
}
const getComment = async (req, res, next) => {
    try {
        const getComments = await commentModel.find({ projectId: req.params.projectId });
        if (getComments.length === 0) return next(createError(404, "Comment not found!"));
        res.status(200).send(getComments);
    } catch (error) {
        next(error);
    }
}
const deleteComment = async (req, res) => {
}

module.exports = { createComment, getComment, deleteComment };