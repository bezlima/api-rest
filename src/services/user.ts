const databaseConnection = require('../utils/dataBase')
const user = require('../models/dataBaseSchema')

interface IUserData {
    userName: string
    email: string
    password: string
}

exports.listUser = async () => {
    await databaseConnection()
    const users = await user.find()
    return users
}

exports.createUser = async (dataUser: IUserData) => {
    await databaseConnection()
    const createUser = await user.create(dataUser)
    return createUser
}

exports.listAUser = async (id: string) => {
    await databaseConnection()
    const oneUser = await user.findById(id)
    return oneUser
}

exports.updateUser = async (id: string, newDataUser: IUserData) => {
    await databaseConnection()
    await user.findByIdAndUpdate(id, newDataUser)
}

exports.deleteUser = async (id: string) => {
    await databaseConnection()
    await user.findByIdAndDelete(id)
}
