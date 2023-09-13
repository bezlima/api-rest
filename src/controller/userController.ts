import { Response, Request } from 'express'
const { listUser, createUser, deleteUser, updateUser, listAUser } = require('../services/user')

async function getAll(req: Request, res: Response) {
    const userList = await listUser()
    res.status(200).send(userList)
}

async function createOne(req: Request, res: Response) {
    try {
        const user = await createUser(req.body)
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
}

async function getOne(req: Request, res: Response) {
    try {
        const user = await listAUser(req.params.id)
        res.status(200).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
}

async function updateOne(req: Request, res: Response) {
    await updateUser(req.params.id, req.body)
    res.status(204)
}

async function deleteOne(req: Request, res: Response) {
    await deleteUser(req.params.id)
    res.status(204)
}

module.exports = { getAll, createOne, getOne, updateOne, deleteOne }
