const conversationModel = require("../models/conversation.model");
const createError = require("../utilities/createError");

const createConversation = async (req, res, next) => {
    try {
        const checkConversation = await conversationModel.findOne({
            members: { $all: [req.body.senderId] }
        });

        if (checkConversation) {
            return next(createError(403, "You've already created a conversation."));
        }

        const newConversation = new conversationModel({
            members: [req.body.senderId, req.body.recieverId]
        });
        await newConversation.save();
        res.status(201).send('Conversation has been created!')

    } catch (error) {
        next(error);
    }
}
const getConversation = async (req, res, next) => {
    try {
        const conversation = await conversationModel.find({
            members: { $in: [req.params.userId] }
        })
        res.status(200).send(conversation);

    } catch (error) {
        next(error);
    }
}

module.exports = { createConversation, getConversation };