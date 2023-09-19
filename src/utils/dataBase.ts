import mongoose, { ConnectOptions } from 'mongoose'
require('dotenv').config()

const URl = process.env.MONGO_HOST!

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(URl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions)
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error)
        throw error
    }
}
