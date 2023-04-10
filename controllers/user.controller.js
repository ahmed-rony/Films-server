const User = require("../models/user.model");
const createError = require("../utilities/createError");

// console.log(req.body, getUser);
// if(getUser._id.toString() !== userId) return next(createError(403, "You can update your account only."));
const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    // Filter out fields that are empty, null, or already have a value in the database
    const nonEmptyValues = Object.entries(req.body)
      .filter(([key, value]) => value !== '' && value !== null && User.findById(userId)[key] !== value)
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: nonEmptyValues },
      { new: true }
    );
    res.status(200).send(updatedUser);
    console.log(updatedUser);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const getAUser = await User.findById(userId);
    res.status(200).send(getAUser);
  } catch (error) {
    next(error);
  }
}
const getUsers = async (req, res, next) => {
  const q = req.query;

  const filters = {
    ...(q.userId && { _id: q.userId }),
    ...(q.cat && { category: { $in: q.cat.split(",") } }),
    ...(q.search && {
      $or: [
        { talentTitle: { $regex: q.search, $options: "i" } },
        { fullName: { $regex: q.search, $options: "i" } },
      ]
    }),
  };
  try {
    const users = await User.find(filters);
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const user = User.findById(req.params.id);
    if (req.userId !== user._id.toString()) {
      return next(createError(403, "You can delete your account only."));
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send('account deleted.');

  } catch (error) {
    next(error);
  }
}

module.exports = { deleteUser, updateUser, getUser, getUsers };