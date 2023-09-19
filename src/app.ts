import { Response, Request } from 'express'
import LoginRouter from './routes/loginRoute'
import SigninRouter from './routes/signinRoute'
import UserRouter from './routes/userRoute'

var bodyParser = require('body-parser')
const express = require('express')
var cors = require('cors')
const app = express()
const PORT = 8000

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}

app.use(express.json())
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.use(UserRouter)
app.use(LoginRouter)
app.use(SigninRouter)

app.get('/', (req: Request, res: Response) => {
    res.send(`
        <html>
            <div style="display: flex; align-items: center">
                <p style="margin-right: 5px"> api em: </p>
                <a href="http://localhost:8000/api/user">
                    /api/user
                </a>
            </div>
        </html 
    `)
})
app.listen(PORT, () => {
    console.log('app online http://localhost:8000/')
})
