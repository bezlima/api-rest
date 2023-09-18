import express from 'express'
const SigninRouter = express.Router()
const userController = require('../controller/userController')

SigninRouter.route('/api/signin').post(userController.createOne)

module.exports = SigninRouter
