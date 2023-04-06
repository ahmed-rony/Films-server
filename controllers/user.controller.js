const User = require("../models/user.model");
const createError = require("../utilities/createError");

const fn = async (req, res, next) => {
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

module.exports = { deleteUser };