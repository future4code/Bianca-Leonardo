import { Request, Response } from "express";
import moment from "moment";
import connection from "../connection";

const putStatusById = async (req: Request, res: Response) => {

    const {status} = req.body
    const idTask = req.params.id
    let errorCode = 400

    try {

        if (!status || status === '') {
            errorCode = 404
            throw new Error("Status não enviado");
            
        }

        await connection
        .update({
            status
        })
        .from('Tasks')
        .where({id: idTask})

        res.status(200).send('Status atualizado')
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
};

export default putStatusById;