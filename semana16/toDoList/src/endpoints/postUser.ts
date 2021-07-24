import { Request, Response } from "express";
import connection from "../connection";

const postUser = async (req: Request, res: Response) => {

    const { name, nickname, email } = req.body
    let errorCode = 400

    try {

        if (!name || !nickname || !email) {
            errorCode = 404
            throw new Error("Preencha todos os campos");
        }

        await connection
        .insert({
                id: Date.now().toString(),
                name,
                nickname,
                email
            })
            .into('Users')

        res.status(200).send('Usuário criado com Sucesso!')
    } catch (error) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
};

export default postUser;