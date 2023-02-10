import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes'
import mongoose from './config/mongoose'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', routes)

dotenv.config()

mongoose.init()

const PORT = process.env.PORT || 8008

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
