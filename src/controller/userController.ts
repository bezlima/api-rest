import { Response, Request } from 'express'
import { userSchemaRequest } from '../models/reqSchema'
import { listUser, deleteUser, updateUser, listAUser } from '../services/userService'

export async function getAll(req: Request, res: Response) {
    try {
        const userList = await listUser()
        res.status(200).send(userList)
    } catch (error) {
        res.status(400).send(error)
    }
}

export async function getOne(req: Request, res: Response) {
    try {
        const user = await listAUser(req.params.id)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

export async function updateOne(req: Request, res: Response) {
    try {
        const validBody = userSchemaRequest.parse(req.body)
        await updateUser(req.params.id, validBody)
        res.status(204).send()
    } catch (error) {
        res.status(400).send(error)
    }
}

export async function deleteOne(req: Request, res: Response) {
    try {
        await deleteUser(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(400).send(error)
    }
}
