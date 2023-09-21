import express, { Response, Request } from 'express'
import LoginRouter from './routes/loginRoute'
import SigninRouter from './routes/signinRoute'
import UserRouter from './routes/userRoute'
import bodyParser from 'body-parser'
import cors from 'cors'
import { corsOptions } from './utils/corsOptions'
import homeRouter from './routes/homeRoute'

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.use(UserRouter)
app.use(LoginRouter)
app.use(SigninRouter)
app.use(homeRouter)

export = app
