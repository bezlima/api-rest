import { Response, Request } from 'express'
import { homeTemplate } from '../utils/homeTemplate'

export async function homeController(req: Request, res: Response) {
    try {
        res.status(200).send(homeTemplate)
    } catch (error: any) {
        console.log(error)
    }
}
