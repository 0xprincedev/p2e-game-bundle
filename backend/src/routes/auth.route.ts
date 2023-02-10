import express from 'express'

import auth from '../controllers/auth.controller'
import { loginValidator, registerValidator } from '../validators/auth.validator'

const router = express.Router()

router.post('/login', loginValidator, auth.login)
router.post('/register', registerValidator, auth.register)

export default router
