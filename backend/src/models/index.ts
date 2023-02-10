import mongoose from 'mongoose'
import dotenv from 'dotenv'

import user from './user.model'

dotenv.config()

mongoose.Promise = global.Promise

const db: Record<any, any> = {}

db.mongoose = mongoose
db.url = process.env.MONGO_URI
db.user = user(mongoose)

export default db
