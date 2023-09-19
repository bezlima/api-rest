import { Response, Request } from 'express'
const { userSchemaRequest } = require('../models/reqSchema')
const { createUser } = require('../services/userService')
const { hashPassword } = require('../utils/encrypt')

async function createOne(req: Request, res: Response) {
    try {
        const validBody = userSchemaRequest.parse(req.body)
        const hashedPassword = await hashPassword(validBody.password)
        validBody.password = hashedPassword
        const user = await createUser(validBody)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { createOne }
