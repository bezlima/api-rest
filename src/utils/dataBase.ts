const mongoose = require('mongoose')
require('dotenv').config()

const URl = process.env.MONGO_HOST

const connectToDatabase = async () => {
    try {
        await mongoose.connect(URl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error)
    }
}

module.exports = connectToDatabase
