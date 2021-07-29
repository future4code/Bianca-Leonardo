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

        if(name){
            await connection
            .update({name})
            .where(id)
            .into('Users')
        }

        if(nickname){
            await connection
            .update({nickname})
            .where(id)
            .into('Users')
        }

        if(email){
            await connection
            .update({email})
            .where(id)
            .into('Users')
        }

        res.status(200).send('Dados atualizados')
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
};

export default putUserById;