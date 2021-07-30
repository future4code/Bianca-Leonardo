import { Request, Response } from 'express';
import connection from '../connection';

const getUserByPage = async (req: Request, res: Response) =>{

    try {

        const page = Number(req.query.page)

        const offset:number = 5 * (page - 1)

        const users = await connection('aula48_exercicio')
        .limit(5)
        .offset(offset)
        
        res.status(200).send(users)

    } catch (error) {
        res.send(error.message || error.sqlMessage)
        
    }
};

export default getUserByPage;