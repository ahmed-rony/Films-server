const messageModel = require("../models/message.model");

const createMessage = async (req, res, next) => {
  try {
      const newMessage = new messageModel(req.body);
      const savedMessage = await newMessage.save();
      res.status(201).send(savedMessage);

  } catch (error) {
      next(error);
  }
}
  
const getMessages = async (req, res, next) => {
    try {
        const message = await messageModel.find({
            conversationId: req.params.conversationId
        })
        res.status(200).send(message);

    } catch (error) {
        next(error);
    }
}

module.exports = { createMessage,getMessages };