import { connectToDatabase } from '../utils/dataBase'
import user from '../models/dataBaseSchema'

interface IUserData {
    userName: string
    email: string
    password: string
}

export const createUser = async (dataUser: IUserData) => {
    await connectToDatabase()
    const createUser = await user.create(dataUser)
    return createUser
}
