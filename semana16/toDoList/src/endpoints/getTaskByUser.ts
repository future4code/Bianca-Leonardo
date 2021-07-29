import { Request, Response } from "express";
import moment from "moment";
import connection from "../connection";

const getTaskByUser = async (req: Request, res: Response) => {

    let errorCode = 400
    const creatorUserId = req.query.creatoruserid

    try {
        const result = await connection.raw(`
            SELECT Tasks.*, nickname 
            FROM Tasks
            JOIN Users
            ON creatorUserId = Users.id
            WHERE creatorUserId = '${creatorUserId}';
        `)

        res.status(200).send(result[0])
} catch (error) {
    res.status(errorCode).send({ message: error.message })
}
}

export default getTaskByUser;