
const magazineModel = require("../models/magazine.model");
const createError = require("../utilities/createError");
const { getGridFSBucket } = require("../utilities/gridfs");


const createPost = async (req, res, next) => {
    console.log(req.body);
    try {

        // const bucket = await getGridFSBucket();
        const newPostData = {
            // Assuming that the rich text editor data is in the "content" field
            ...req.body,
            desc: req.body.desc,
        };

        // // Upload any images to GridFS
        // const images = req.body.images || [];
        // const imageIds = [];
        // for (const image of images) {
        //     const writeStream = bucket.openUploadStream(image.filename);
        //     writeStream.write(image.data);
        //     writeStream.end();
        //     const file = await writeStream.on('close');
        //     imageIds.push(file._id);
        // }

        // // Add the image IDs to the new post data
        // newPostData.images = imageIds;

        // Create a new post in the database
        const newPost = new magazineModel(req.body);
        await newPost.save();
        res.status(201).send("Post has been created!");
    } catch (error) {
        next(error);
    }
};

const getPost = async (req, res, next) => {

    try {
        const postId = req.params.id;
        const getAPost = await magazineModel.findById(postId);
        if (!getAPost) return next(createError(404, "Post not found!"));
        res.status(200).send(getAPost);
    } catch (error) {
        next(error);
    }
}
const getPosts = async (req, res, next) => {
    const q = req.query;

    const filters = {
        ...(q.userId && { userId: q.userId }),
        ...(q.cat && { category: { $in: q.cat.split(",") } }),
        ...(q.search && { title: { $regex: q.search, $options: "i" } }),
    };
    try {
        const posts = await magazineModel.find(filters);
        res.status(200).send(posts);
    } catch (error) {
        next(error);
    }
}

module.exports = { createPost, getPost, getPosts };