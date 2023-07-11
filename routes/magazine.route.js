const express = require('express');
const verifyToken = require('../middleware/jwt');
const { createPost, getPost, getPosts } = require('../controllers/magazine.controller');
const router = express.Router();

// // CREATE
router.post('/', verifyToken, createPost);
// // DELETE
// router.delete('/:id', verifyToken, deleteUser)
// // GET SPECIFICLY
router.get('/:id', getPost)
// // GET PROJECTS
router.get('/', getPosts)
// GET ALL
// router.get('/', allUser)

module.exports = router;