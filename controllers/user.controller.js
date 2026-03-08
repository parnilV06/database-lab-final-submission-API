const User = require('../models/user.model');

// @desc    Create User
// @route   POST /api/users
// @access  Public
const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        if (error.code === 11000) {
            const duplicateError = new Error('Email already exists');
            duplicateError.statusCode = 400;
            return next(duplicateError);
        }
        next(error);
    }
};

// @desc    Get All Users
// @route   GET /api/users
// @access  Public
const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// @desc    Get User by ID
// @route   GET /api/users/:id
// @access  Public
const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            const error = new Error('Not Found');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(user);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            const notFoundError = new Error('Not Found');
            notFoundError.statusCode = 404;
            return next(notFoundError);
        }
        next(error);
    }
};

// @desc    Update User
// @route   PUT /api/users/:id
// @access  Public
const updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!user) {
            const error = new Error('Not Found');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(user);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            const notFoundError = new Error('Not Found');
            notFoundError.statusCode = 404;
            return next(notFoundError);
        }
        next(error);
    }
};

// @desc    Delete User
// @route   DELETE /api/users/:id
// @access  Public
const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            const error = new Error('Not Found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            const notFoundError = new Error('Not Found');
            notFoundError.statusCode = 404;
            return next(notFoundError);
        }
        next(error);
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
