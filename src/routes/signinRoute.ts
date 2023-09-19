import express from 'express'
import { createOne } from '../controller/signinController'
const SigninRouter = express.Router()

SigninRouter.route('/api/signin').post(createOne)

export = SigninRouter
