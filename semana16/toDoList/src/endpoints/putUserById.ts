import { Request, Response } from "express";
import connection from "../connection";

const putUserById = async (req: Request, res: Response) => {

    const id = req.params
    let errorCode = 400

    try {

        if (req.body.name && req.body.name !== '') {
            
            await connection('Users')
            .update({
                name: req.body.name
            })
            .where(id)
        }

        if (req.body.nickname && req.body.nickname !== '') {
            
            await connection('Users')
            .update({
                nickname: req.body.nickname
            })
            .where(id)
        }

        if (req.body.email && req.body.email !== '') {
            
            await connection('Users')
            .update({
                email: req.body.email
            })
            .where(id)
        }
        
        res.status(200).send('Dados atualizados')
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
};

export default putUserById;