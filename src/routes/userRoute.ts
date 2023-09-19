import express from 'express'
import { getAll, getOne, updateOne, deleteOne } from '../controller/userController'
const UserRouter = express.Router()

UserRouter.route('/api/user').get(getAll)

UserRouter.route('/api/user/:id').get(getOne).patch(updateOne).delete(deleteOne)

export = UserRouter
