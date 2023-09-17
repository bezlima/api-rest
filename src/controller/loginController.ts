import { Response, Request } from 'express'
const { loginSchemaRequest } = require('../models/loginSchema')
const { listUser } = require('../services/loginService')

async function loginController(req: Request, res: Response) {
    try {
        const validRequest = loginSchemaRequest.parse(req.body)
        const login = await listUser(validRequest.email, validRequest.password)
        res.status(200).send(login ? 'entrou' : 'email ou senha incorreta')
    } catch (error: any) {
        console.log(error)
    }
}

module.exports = { loginController }
