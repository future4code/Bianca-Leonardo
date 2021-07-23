import { Request, Response } from "express";
import connection from "../connection";

const getAllUsers = async (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const result = await connection('Users')
        
        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}

export default getAllUsers;