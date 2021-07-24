import { Request, Response } from "express";
import connection from "../connection";
import moment from 'moment'

const postTask = async (req: Request, res: Response) => {

    const { title, description, limitDate, creatorUserId } = req.body
    let errorCode = 400

    // const [day, month, year] = limitDate.split("/")
    // const newDate: Date = new Date(`${year}-${month}-${day}`)

    try {

        if (title === '' || description === '' || limitDate === '' || creatorUserId === '') {
            errorCode = 404
            throw new Error("Preencha todos os campos");

        }

        // Verifica se a data de limite já passou
        // cria uma variavel que recebe o moment de limitdate e converte em um timeStamp, subtrai pelo moment de agora e transforma em timestamp
        const dateDiff: number = moment(limitDate, 'DD/MM/YYYY').unix() - moment().unix()

        // Se o dateDiff for negativo, retorna um erro... Pois a data de limite já passou
        if (dateDiff <= 0) {
            errorCode = 404
            throw new Error("Data de Limite deve ser uma data futura");
        }

        await connection
            .insert({
                id: Date.now().toString(),
                title,
                description,
                limitDate: moment(limitDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                status: 'to_do',
                creatorUserId
            })
            .into('Tasks')

        res.status(200).send('Task Criada com sucesso!')
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
};

export default postTask;