const express = require('express');
const { deleteUser, updateUser, getUser, getUsers } = require('../controllers/user.controller');
const verifyToken = require('../middleware/jwt');
const router = express.Router();

// // UPDATE
router.put('/:id', verifyToken, updateUser)
// // DELETE
router.delete('/:id', verifyToken, deleteUser)
// // GET SPECIFICLY
router.get('/:id', getUser)
// GET ALL
router.get('/', getUsers)

module.exports = router;