import { Request, Response } from "express";
import connection from "../connection";

const getTaskByUser = async (req: Request, res: Response) => {

    let errorCode = 400
    const creatorUserId = req.query

    try {

        const result = await connection('Tasks')
        .where(creatorUserId)
        
        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}

export default getTaskByUser;