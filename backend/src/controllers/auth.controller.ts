import type { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'

import db from '../models'
const User = db.user

dotenv.config()

const login = (req: Request, res: Response) => {
	const { email, password } = req.body

	const token = jwt.sign({ email }, process.env.JWT_SECRET || '', { expiresIn: '1d' })

	return res.status(200).send({ email, token })
}

const register = async (req: Request, res: Response) => {
	const { email, username, password } = req.body
}

export default { login }
