import { connectToDatabase } from '../utils/dataBase'
import user from '../models/dataBaseSchema'

interface IUserData {
    userName: string
    email: string
    password: string
}

export const listUser = async () => {
    await connectToDatabase()
    const users = await user.find().select('-password').select('-__v')
    return users
}

export const listAUser = async (id: string) => {
    await connectToDatabase()
    const oneUser = await user.findById(id).select('-password').select('-__v')
    return oneUser
}

export const updateUser = async (id: string, newDataUser: any) => {
    await connectToDatabase()
    await user.findByIdAndUpdate(id, newDataUser)
    return
}

export const deleteUser = async (id: string) => {
    await connectToDatabase()
    await user.findByIdAndDelete(id)
    return
}
