import express from 'express'
import { homeController } from '../controller/homeController'
const homeRouter = express.Router()

homeRouter.route('/').get(homeController)

export = homeRouter
