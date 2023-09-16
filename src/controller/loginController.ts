import { Response, Request } from 'express'
const { loginSchemaRequest } = require('../models/loginSchema')
const { listUser } = require('../services/loginService')

async function loginController(req: Request, res: Response) {
    try {
        const validRequest = loginSchemaRequest.parser(req.body)
        await listUser(validRequest)
        res.status(200).send()
    } catch (error: any) {
        console.log(error)
    }
}

module.exports = { loginController }
