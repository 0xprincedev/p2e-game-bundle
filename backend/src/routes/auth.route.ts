import express from 'express'

import auth from '../controllers/auth.controller'
import { loginValidator } from '../validators/auth.validator'

const router = express.Router()

router.post('/login', loginValidator, auth.login)

export default router
