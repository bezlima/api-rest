const databaseConnection = require('../utils/dataBase')
const user = require('../models/dataBaseSchema')

exports.listUser = async () => {
    await databaseConnection()
    const users = await user.find()
    return users
}

exports.createUser = async (user: any) => {
    await databaseConnection()
    const createUser = await user.create(user)
    return user
}

exports.listAUser = async (id: any) => {
    await databaseConnection()
    const oneUser = await user.findById(id)
    return oneUser
}

exports.updateUser = async (id: any, newBody: any) => {
    await databaseConnection()
    await user.findByIdAndUpdate(id, newBody)
}

exports.deleteUser = async (id: any) => {
    await databaseConnection()
    await user.findByIdAndDelete(id)
}
