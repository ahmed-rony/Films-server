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

const UpdateProject = async (req, res, next) => {

    try {
        const interaction = await projectModel.findByIdAndUpdate(req.projectId, { $set: { likes: req.body._id, } }, { $inc: { views: req.body.view } }, { new: true });
        res.status(201).send(interaction);
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

//Like the project

const likeProject = async (req, res, next) => {

    if (req.body.profileId !== req.params.id) {
        try {
            const project = await projectModel.findById(req.params.id);
            if (!project.likes.includes(req.body.profileId)) {
                await project.updateOne({ $push: { likes: req.body.profileId } });
                res.status(200).send("Project has been liked");
            } else {
                await project.updateOne({ $pull: { likes: req.body.profileId } });
                res.status(200).send("Project hasn't been liked yet.");
            }
        } catch (err) {
            next(err);
        }
    } else {
        res.status(403).send("you cannot like your project");
    }
};

module.exports = { createProject, UpdateProject, getProject, getProjects, likeProject };