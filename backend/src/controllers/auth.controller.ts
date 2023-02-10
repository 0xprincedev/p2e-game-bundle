import type { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'

import db from '../models'
const User = db.user

dotenv.config()

const login = async (req: Request, res: Response) => {
	const { email, password } = req.body

	try {
		const validator = validationResult(req)

		if (!validator.isEmpty()) {
			return res
				.status(403)
				.send({ message: 'Validation error', error: validator.array() })
		}

		let user = await User.findOne({ email })
		if (!user) {
			return res.status(401).send({ message: 'E-mail or password is invalid' })
		}

		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) {
			return res.status(401).send({ message: 'E-mail or password is invalid' })
		}

		const token = jwt.sign(
			{ _id: user._id, email: user.email },
			process.env.JWT_SECRET || '',
			{ expiresIn: '1d' }
		)
		return res.status(200).send({ user, token })
	} catch (err: any) {
		res.status(500).send({ message: err.message || 'Interval server error' })
	}
}

const register = async (req: Request, res: Response) => {
	const { email, username, password } = req.body

	try {
		const validator = validationResult(req)

		if (!validator.isEmpty()) {
			return res.status(403).send({
				message: 'Validation error',
				error: validator.array(),
			})
		}

		let user = await User.findOne({ email })
		if (user) {
			return res.status(409).send({ message: 'E-mail is already in use' })
		}

		user = await User.findOne({ username })
		if (user) {
			return res.status(409).send({ message: 'Username is already in use' })
		}

		user = await User.create({ email, username, password })
		return res.status(201).send()
	} catch (err: any) {
		return res.status(500).send({ message: err.message || 'Internal server error' })
	}
}

export default { login, register }
