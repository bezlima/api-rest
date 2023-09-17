const databaseConnection = require('../utils/dataBase')
const user = require('../models/dataBaseSchema')
import { comparePassword } from '../utils/encrypt'

const listUser = async (email: string, password: string) => {
    await databaseConnection()
    let login
    const loginUser = await user.findOne({ email })
    if (loginUser) {
        await comparePassword(password, loginUser.password).then((res: boolean) => {
            return (login = res)
        })
    } else {
        login = false
    }
    return login
}

module.exports = { listUser }
