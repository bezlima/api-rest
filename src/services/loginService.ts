const databaseConnection = require('../utils/dataBase')
const user = require('../models/dataBaseSchema')
import { comparePassword } from '../utils/encrypt'

const listUser = async (email: string, password: string) => {
    await databaseConnection()
    const loginUser = await user.findOne({ email })
    const verifyPass = comparePassword(password, loginUser.password)
    console.log(verifyPass)
    return loginUser
}

module.exports = { listUser }
