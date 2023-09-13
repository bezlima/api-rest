const databaseConnection = require('../utils/dataBase')
const User = require('../models/user')

exports.listUser = async () => {
    await databaseConnection()
    const users = await User.find()
    return users
}

exports.createUser = async (user: any) => {
    await databaseConnection()
    const createUser = await User.create(user)
    return user
}

exports.listAUser = async (id: any) => {
    await databaseConnection()
    const oneUser = await User.findById(id)
    return oneUser
}

exports.updateUser = async (id: any, newBody: any) => {
    await databaseConnection()
    await User.findByIdAndUpdate(id, newBody)
}

exports.deleteUser = async (id: any) => {
    await databaseConnection()
    await User.findByIdAndDelete(id)
}
