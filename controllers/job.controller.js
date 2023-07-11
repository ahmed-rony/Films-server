const jobModel = require("../models/job.model");
const createError = require("../utilities/createError");

const createJob = async (req, res, next) => {
    try {
        const newJob = new jobModel(req.body);
        await newJob.save();
        res.status(201).send('Job has been created!')
    } catch (error) {
        next(error);
    }
}
const getJob = async (req, res, next) => {

    try {
        const jobId = req.params.id;
        const getAJob = await jobModel.findById(jobId);
        if (!getAJob) return next(createError(404, "Job not found!"));
        res.status(200).send(getAJob);
    } catch (error) {
        next(error);
    }
}
const getJobs = async (req, res, next) => {
    const q = req.query;

    const filters = {
        ...(q.userId && { userId: q.userId }),
        ...(q.cat && { category: { $in: q.cat.split(",") } }),
        ...(q.search && { title: { $regex: q.search, $options: "i" } }),
    };
    try {
        const jobs = await jobModel.find(filters);
        res.status(200).send(jobs);
    } catch (error) {
        next(error);
    }
}

module.exports = { createJob, getJob, getJobs };