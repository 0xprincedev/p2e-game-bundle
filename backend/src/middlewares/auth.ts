import jwt from 'jsonwebtoken'
import type { Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'

dotenv.config()

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
	const token = req.header('Authorization')

	if (!token) {
		return res.status(401).send({ message: 'Unauthorized request' })
	}

	jwt.verify(token, process.env.JWT_SECRET || '')

	next()
}
