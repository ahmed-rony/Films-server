const express = require('express');
const verifyToken = require('../middleware/jwt');
const { createMessage, getMessages } = require('../controllers/message.controller');
const router = express.Router();

// CREATE
router.post('/', verifyToken, createMessage);
// // GET MESSAGES
router.get('/:conversationId', verifyToken, getMessages)
// GET ALL
// router.get('/', allUser)
// // DELETE
// router.delete('/:id', verifyUser, deleteUser)

module.exports = router;