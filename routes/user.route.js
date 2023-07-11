const express = require('express');
const { deleteUser, updateUser, getUser, getUsers, followUser } = require('../controllers/user.controller');
const verifyToken = require('../middleware/jwt');
const router = express.Router();

// // UPDATE
router.put('/:id', verifyToken, updateUser);
// // UPDATE FOLLOW
router.put('/:id/follow', verifyToken, followUser);
// // DELETE
router.delete('/:id', verifyToken, deleteUser);
// // GET SPECIFICLY
router.get('/:id', getUser);
// GET ALL
router.get('/', getUsers);

module.exports = router;