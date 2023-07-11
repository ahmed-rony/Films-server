const express = require('express');
const verifyToken = require('../middleware/jwt');
const {  } = require('../controllers/project.controller');
const { createJob, getJob, getJobs } = require('../controllers/job.controller');
const router = express.Router();

// // CREATE
router.post('/', verifyToken, createJob);
// // UPDATE
// router.put('/:id', verifyToken, UpdateProject);
// // DELETE
// router.delete('/:id', verifyToken, deleteUser)
// // GET SPECIFICLY
router.get('/:id', getJob)
// // GET PROJECTS
router.get('/', getJobs)
// GET ALL
// router.get('/', allUser)

module.exports = router;