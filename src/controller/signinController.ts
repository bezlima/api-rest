import { Response, Request } from 'express'
import { userSchemaRequest } from '../models/reqSchema'
import { createUser } from '../services/signinService'
import { hashPassword } from '../utils/encrypt'

export async function createOne(req: Request, res: Response) {
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
