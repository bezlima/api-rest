const databaseConnection = require('../utils/dataBase')
const user = require('../models/dataBaseSchema')

exports.listUser = async (email: string, password: string) => {
    await databaseConnection()
    const users = await user.findOne({ email })
    return users
}
