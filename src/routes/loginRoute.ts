import express from 'express'
import { loginController } from '../controller/loginController'
const LoginRouter = express.Router()

LoginRouter.route('/api/login').post(loginController)

export = LoginRouter
