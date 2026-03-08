const { body, validationResult } = require('express-validator');

const validateUser = [
    body('name').notEmpty().withMessage('name must not be empty'),
    body('email').isEmail().withMessage('email must be valid'),
    body('age').isNumeric().withMessage('age must be numeric'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }
        next();
    }
];

module.exports = {
    validateUser
};
