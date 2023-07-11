const express = require('express');
const verifyToken = require('../middleware/jwt');
const { createProject, getProject, getProjects, UpdateProject, likeProject } = require('../controllers/project.controller');
const router = express.Router();

// // CREATE
router.post('/', verifyToken, createProject)
// // UPDATE
router.put('/:id', verifyToken, UpdateProject)
// // UPDATE LIKE
router.put('/:id/like', verifyToken, likeProject)
// // DELETE
// router.delete('/:id', verifyToken, deleteUser)
// // GET SPECIFICLY
router.get('/:id', getProject)
// // GET PROJECTS
router.get('/', getProjects)
// GET ALL
// router.get('/', allUser)

module.exports = router;