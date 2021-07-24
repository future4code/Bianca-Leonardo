import { Request, Response } from "express";
import connection from "../connection";

const getUserById = async (req: Request, res: Response) => {

    const id = req.params
    let errorCode = 400

    try {

        const result = await connection
        .select('id', 'nickname')
        .into('Users')
        .where(id)

        if (!result[0]) {
            errorCode = 404
            throw new Error("Usuário não encontrado");
        }

        res.status(200).send(result[0])
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
};

export default getUserById;