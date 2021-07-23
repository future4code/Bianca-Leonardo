import { Request, Response } from "express";
import connection from "../connection";

const putUserById = async (req: Request, res: Response) => {

    const {name, nickname, email} = req.body
    const id = req.params
    let errorCode = 400

    try {

        if (name === '' || nickname === '' || email === '') {
            errorCode = 404
            throw new Error("Preencha todos os campos");
        }

        await connection('Users')
                .update({
                    name,
                    nickname,
                    email
                })
                .where(id)

        res.status(200).send('Dados atualizados')
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
};

export default putUserById;