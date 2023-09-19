import { comparePassword } from '../utils/encrypt'
import user from '../models/dataBaseSchema'
import { connectToDatabase } from '../utils/dataBase'

export const listUser = async (email: string, password: string) => {
    await connectToDatabase()
    let login
    const loginUser = await user.findOne({ email })
    if (loginUser?.password) {
        await comparePassword(password, loginUser.password).then((res: boolean) => {
            return (login = res)
        })
    } else {
        login = false
    }
    return login
}
