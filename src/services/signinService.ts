const databaseConnection = require('../utils/dataBase')
const user = require('../models/dataBaseSchema')

exports.createUser = async (dataUser: IUserData) => {
    await databaseConnection()
    const createUser = await user.create(dataUser)
    return createUser
}
