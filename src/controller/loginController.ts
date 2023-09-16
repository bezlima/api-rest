import { Response, Request } from 'express'

async function loginController(req: Request, res: Response) {
    try {
        res.status(200).send()
    } catch (error: any) {
        console.log(error)
    }
}

module.exports = { loginController }
