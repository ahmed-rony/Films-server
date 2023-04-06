const express = require('express');
const { deleteUser } = require('../controllers/user.controller');
const verifyToken = require('../middleware/jwt');
const router = express.Router();

// // UPDATE
// router.put('/:id', verifyUser, updateUser)
// // DELETE
router.delete('/:id', verifyToken, deleteUser)
// // GET SPECIFICLY
// router.get('/:id', verifyUser, getUser)
// GET ALL
// router.get('/', allUser)

module.exports = router;