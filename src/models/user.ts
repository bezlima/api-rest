import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    userName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
})

const User = mongoose.model('User', UserSchema)

module.exports = User
