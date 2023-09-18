import express from 'express'
const SigninRouter = express.Router()
const { createOne } = require('../controller/signinController')

SigninRouter.route('/api/signin').post(createOne)

module.exports = SigninRouter
