import { Response, Request } from 'express'
import { loginSchemaRequest } from '../models/loginSchema'
import { listUser } from '../services/loginService'

export async function loginController(req: Request, res: Response) {
    try {
        const validRequest = loginSchemaRequest.parse(req.body)
        const login = await listUser(validRequest.email, validRequest.password)
        res.status(200).send(login ? 'entrou' : 'email ou senha incorreta')
    } catch (error: any) {
        console.log(error)
    }
}
