import { Request, Response } from "express";
import connection from "../connection";

const getUserByTask = async (req: Request, res: Response) => {

    let errorCode = 400
    const idTask = req.params.id

    try {

        if (!idTask) {
            errorCode = 404
            throw new Error("Id da task não enviada");
            
        }

        const result = await connection.raw(`
            SELECT id, nickname
            FROM ToDoListAndResponsibleUser
            JOIN Users
            ON user_id = id
            WHERE task_id = '${idTask}'
        `)
      
        res.status(200).send(result[0])
} catch (error) {
    res.status(errorCode).send({ message: error.message })
}
}

export default getUserByTask;