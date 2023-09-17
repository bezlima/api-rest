const databaseConnection = require('../utils/dataBase')
const user = require('../models/dataBaseSchema')
import { comparePassword } from '../utils/encrypt'

const listUser = async (email: string, password: string) => {
    await databaseConnection()

    const loginUser = await user.findOne({ email })

    let login
    await comparePassword(password, loginUser.password).then((res: boolean) => {
        return (login = res)
    })

    return login
}

module.exports = { listUser }
