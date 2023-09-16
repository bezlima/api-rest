import express from 'express'
const userRouter = express.Router()
const userController = require('../controller/userController')

userRouter.route('/api/user').get(userController.getAll).post(userController.createOne)

userRouter
    .route('/api/user/:id')
    .get(userController.getOne)
    .patch(userController.updateOne)
    .delete(userController.deleteOne)

module.exports = userRouter
