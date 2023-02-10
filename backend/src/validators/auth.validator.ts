import { body } from 'express-validator'

export const loginValidator = [
	body('email')
		.exists()
		.withMessage('E-mail is required')
		.trim()
		.normalizeEmail()
		.isEmail()
		.withMessage('Invalid E-mail address'),
	body('password')
		.exists()
		.withMessage('Password is required')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long'),
]

export const regiserValidator = [
	body('email')
		.exists()
		.withMessage('E-mail is required')
		.trim()
		.normalizeEmail()
		.isEmail()
		.withMessage('Invalid E-mail address'),
	body('username').exists().withMessage('Username is required'),
	body('password')
		.exists()
		.withMessage('Password is required')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long'),
]
