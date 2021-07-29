import { Request, Response } from "express";
import moment from "moment";
import connection from "../connection";

const getUserByQuery = async (req: Request, res: Response) => {

    let errorCode = 400
    const query = req.query.query

    try {

        const result = await connection.raw(`
            SELECT id, nickname
            FROM Users
            WHERE nickname LIKE '%${query}%' 
            OR email LIKE '%${query}%'
        `)
      
        res.status(200).send(result[0])
} catch (error) {
    res.status(errorCode).send({ message: error.message })
}
}

export default getUserByQuery;