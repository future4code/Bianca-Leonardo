import { Request, Response } from "express";
import moment from "moment";
import connection from "../connection";

const getTaskById = async (req: Request, res: Response) => {

    const id = req.params.id
    let errorCode = 400

    try {

        const result = await connection.raw(`
            SELECT Tasks.*, Users.nickname FROM Tasks
            JOIN Users
            ON creatorUserId = Users.id
            WHERE Tasks.id = '${id}'
        `)

        if(!result){
            errorCode = 404
            throw new Error("Tarefa não encontrada");
        }

        const newResult = result[0][0]

        res.status(200).send({
            id: newResult.id,
            title: newResult.title,
            description: newResult.description,
            limitDate: moment(newResult.limitDate, 'YYYY-MM-DD').format('DD/MM/YYYY'),
            status: newResult.status,
            creatorUserId: newResult.creatorUserId,
            nickname: newResult.nickname
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
};

export default getTaskById;