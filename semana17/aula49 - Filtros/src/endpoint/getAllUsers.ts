import { Request, Response } from "express";
import connection from "../connection";

const getAllUsers = async (req: Request, res: Response) => {
    try {

        const name = req.query.name || '%'

        const users = await connection('aula48_exercicio')
        .where('name', 'LIKE', `%${name}%`)

        res.status(200).send(users)
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
};

export default getAllUsers;