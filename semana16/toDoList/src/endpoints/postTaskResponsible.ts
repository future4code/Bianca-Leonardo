import { Request, Response } from "express";
import moment from "moment";
import connection from "../connection";

const postTaskResponsible = async (req: Request, res: Response) => {

    let errorCode = 400
    const {task_id, responsible_user_id} = req.body

    try {
        if (task_id ==='' || responsible_user_id === '') {
            errorCode = 404
            throw new Error("Preencha todos os campos");
            
        }
        await connection
        .insert({
            user_id: responsible_user_id,
            task_id
        })
        .from('ToDoListAndResponsibleUser')
      
        res.status(200).send('Responsabilidade Atribuida')
} catch (error) {
    res.status(errorCode).send({ message: error.message })
}
}

export default postTaskResponsible;