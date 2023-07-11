const express = require('express');
const { createConversation, getConversation } = require('../controllers/conversation.controller');
const verifyToken = require('../middleware/jwt');
const router = express.Router();

// CREATE
router.post('/', verifyToken, createConversation)
// // DELETE
// router.delete('/:id', verifyUser, deleteUser)
// GET
router.get('/:userId', verifyToken, getConversation)
// GET ALL
// router.get('/', allUser)

module.exports = router;