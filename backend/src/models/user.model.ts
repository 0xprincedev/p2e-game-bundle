import type { NextFunction } from 'express'
import bcrypt from 'bcrypt'

const user = (mongoose: any) => {
	const schema = mongoose.Schema(
		{
			email: {
				type: String,
				required: true,
				unique: true,
			},
			username: {
				type: String,
				required: true,
				unique: true,
			},
			password: {
				type: String,
				required: true,
			},
			role: {
				type: String,
				enum: ['admin', 'user'],
				required: true,
				default: 'user',
			},
			balance: {
				type: Number,
				required: true,
				default: 0,
			},
		},
		{
			timestamps: true,
		}
	)

	schema.pre('save', async function (this: any, next: NextFunction) {
		try {
			const salt = await bcrypt.genSalt()
			this.password = bcrypt.hashSync(this.password, salt)
			next()
		} catch (err: any) {
			throw Error(err)
		}
	})

	const user = mongoose.model('user', schema)
	return user
}

export default user
