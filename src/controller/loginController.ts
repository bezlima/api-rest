import { Response, Request } from 'express'
const { loginSchemaRequest } = require('../models/loginSchema')

async function loginController(req: Request, res: Response) {
    try {
        const validRequest = loginSchemaRequest.parser(req.body)
        res.status(200).send()
    } catch (error: any) {
        console.log(error)
    }
}

module.exports = { loginController }
