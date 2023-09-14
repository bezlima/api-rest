const databaseConnection = require('../utils/dataBase')
const user = require('../models/dataBaseSchema')

interface IUserData {
    userName: string
    email: string
    password: string
}

exports.listUser = async () => {
    await databaseConnection()
    const users = await user.find().select('-password').select('-__v')
    return users
}

exports.createUser = async (dataUser: IUserData) => {
    await databaseConnection()
    const createUser = await user.create(dataUser)
    return createUser
}

exports.listAUser = async (id: string) => {
    await databaseConnection()
    const oneUser = await user.findById(id).select('-password').select('-__v')
    return oneUser
}

exports.updateUser = async (id: string, newDataUser: any) => {
    await databaseConnection()
    await user.findByIdAndUpdate(id, newDataUser)
    return
}

exports.deleteUser = async (id: string) => {
    await databaseConnection()
    await user.findByIdAndDelete(id)
    return
}
