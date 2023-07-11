const express = require('express');
const verifyToken = require('../middleware/jwt');
const { createComment, getComment, deleteComment } = require('../controllers/comment.controller');
const router = express.Router();

// // CREATE
router.post('/', verifyToken, createComment);
// // GET SPECIFICLY
router.get('/:projectId', getComment);
// // DELETE
router.delete('/:id', verifyToken, deleteComment);

module.exports = router;