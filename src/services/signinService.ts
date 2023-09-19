import { connectToDatabase } from '../utils/dataBase'
const user = require('../models/dataBaseSchema')

interface IUserData {
    userName: string
    email: string
    password: string
}

exports.createUser = async (dataUser: IUserData) => {
    await connectToDatabase()
    const createUser = await user.create(dataUser)
    return createUser
}
