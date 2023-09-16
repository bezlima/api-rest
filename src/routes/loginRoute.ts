import express from 'express'
const LoginRouter = express.Router()
const { loginController } = require('../controller/loginController')

LoginRouter.route('/api/login').post(loginController)

module.exports = LoginRouter
