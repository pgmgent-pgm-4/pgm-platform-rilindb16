// src/middleware/registerValidation.js
const { body } = require('express-validator');

module.exports = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .bail()
    .isLength({ max: 255 })
    .withMessage('Name must be at most 255 characters'),
  body('email')
    .notEmpty()
    .withMessage('E-mail is required')
    .bail()
    .isLength({ max: 255 })
    .withMessage('E-mail must be at most 255 characters')
    .bail()
    .isEmail()
    .withMessage('Please enter a valid e-mail address'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .bail()
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters long'),
  body('role')
    .notEmpty()
    .withMessage('Role is required')
    .bail()
    .isIn(['student', 'teacher'])
    .withMessage('Role must be either student or teacher')
];
