import { Response, Request } from 'express'

export async function homeController(req: Request, res: Response) {
    try {
        res.status(200).send(`
            <html>
                <div style="display: flex; align-items: center">
                    <p style="margin-right: 5px"> api em: </p>
                    <a href="http://localhost:8000/api/user">
                        /api/user
                    </a>
                </div>
            </html 
        `)
    } catch (error: any) {
        console.log(error)
    }
}
