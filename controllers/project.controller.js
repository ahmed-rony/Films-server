const projectModel = require("../models/project.model");
const User = require("../models/user.model");
const createError = require("../utilities/createError");

const createProject = async (req, res, next) => {

    try {
        const newProject = new projectModel(req.body);
        await newProject.save();
        res.status(201).send('Project has been created!')
    } catch (error) {
        next(error);
    }
}
const getProject = async (req, res, next) => {

    try {
        const projectId = req.params.id;
        const getAProject = await projectModel.findById(projectId);
        if (!getAProject) return next(createError(404, "Project not found!"));
        res.status(200).send(getAProject);
    } catch (error) {
        next(error);
    }
}
const getProjects = async (req, res, next) => {
    const q = req.query;

    const filters = {
        ...(q.userId && { userId: q.userId }),
        ...(q.cat && { category: { $in: q.cat.split(",") } }),
        ...(q.search && { title: { $regex: q.search, $options: "i" } }),
    };
    try {
        const projects = await projectModel.find(filters);
        res.status(200).send(projects);
    } catch (error) {
        next(error);
    }
}

module.exports = { createProject, getProject, getProjects };