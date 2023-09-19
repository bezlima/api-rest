import { connectToDatabase } from '../utils/dataBase'
const user = require('../models/dataBaseSchema')

interface IUserData {
    userName: string
    email: string
    password: string
}

exports.listUser = async () => {
    await connectToDatabase()
    const users = await user.find().select('-password').select('-__v')
    return users
}

exports.listAUser = async (id: string) => {
    await connectToDatabase()
    const oneUser = await user.findById(id).select('-password').select('-__v')
    return oneUser
}

exports.updateUser = async (id: string, newDataUser: any) => {
    await connectToDatabase()
    await user.findByIdAndUpdate(id, newDataUser)
    return
}

exports.deleteUser = async (id: string) => {
    await connectToDatabase()
    await user.findByIdAndDelete(id)
    return
}
