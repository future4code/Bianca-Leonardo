import { Request, Response } from "express";
import connection from "../connection";

const getTaskById = async (req: Request, res: Response) => {

    const id = req.params
    let errorCode = 400

    try {

        const listTasks = await connection('Tasks')
            .select('Tasks.id', 'title', 'description', 'limitDate', 'status', 'creatorUserId', 'name')
            .join('Users', 'Tasks.creatorUserId', '=', 'Users.id')

        // const listTasks = await connection()
        // .select('*')
        // .from('Tasks')
        // .join('Users')
        // .on('Tasks.creatorUserId', '=', 'Users.id')
            

        // const listTasks = await connection('Tasks')
        //     .select('Tasks.id', 'title', 'description', 'limitDate', 'status', 'creatorUserId', 'name')
        //     .where(id)
        //     .union([
        //         connection('Users').select('')
        //     ])

        // let result: any[] = listTasks.filter(task => task.id == id)
        // let result = listTasks && listTasks.filter(task => {
        //     return task.id === id
        // })

        if (!listTasks[0]) {
            errorCode = 404
            throw new Error("Task não encontrada!");
        }


        res.status(200).send(listTasks)
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
};

export default getTaskById;