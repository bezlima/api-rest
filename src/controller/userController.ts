import { Response, Request } from 'express'
const { userSchemaRequest } = require('../models/reqSchema')
const { listUser, createUser, deleteUser, updateUser, listAUser } = require('../services/user')
const { hashPassword } = require('../utils/encrypt')

async function getAll(req: Request, res: Response) {
    try {
        const userList = await listUser()
        res.status(200).send(userList)
    } catch (error) {
        res.status(400).send(error)
    }
}

async function createOne(req: Request, res: Response) {
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

async function getOne(req: Request, res: Response) {
    try {
        const user = await listAUser(req.params.id)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

async function updateOne(req: Request, res: Response) {
    try {
        const validBody = userSchemaRequest.parse(req.body)
        await updateUser(req.params.id, validBody)
        res.status(204).send()
    } catch (error) {
        res.status(400).send(error)
    }
}

async function deleteOne(req: Request, res: Response) {
    try {
        await deleteUser(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { getAll, createOne, getOne, updateOne, deleteOne }
