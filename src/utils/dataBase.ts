const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/backendteste'

const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error)
    }
}

module.exports = connectToDatabase
