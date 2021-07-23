import { Request, Response } from "express";
import connection from "../connection";

const postTask = async (req: Request, res: Response) => {

    const { title, description, limitDate, creatorUserId } = req.body
    let errorCode = 400

    const [day, month, year] = limitDate.split("/")
    const newDate: Date = new Date(`${year}-${month}-${day}`)

    try {

        if (title === '' || description === '' || limitDate === '' || creatorUserId === '') {
            errorCode = 404
            throw new Error("Preencha todos os campos");

        }

        await connection('Tasks')
            .insert({
                id: Date.now().toString(),
                title,
                description,
                limitDate: newDate,
                status: 'to_do',
                creatorUserId
            })

        res.status(200).send('Task Criada com sucesso!')
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
};

export default postTask;