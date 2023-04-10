const express = require('express');
const verifyToken = require('../middleware/jwt');
const { createProject, getProject, getProjects } = require('../controllers/project.controller');
const router = express.Router();

// // CREATE
router.post('/:id', verifyToken, createProject)
// // DELETE
// router.delete('/:id', verifyToken, deleteUser)
// // GET SPECIFICLY
router.get('/:id', getProject)
// // GET PROJECTS
router.get('/', getProjects)
// GET ALL
// router.get('/', allUser)

module.exports = router;