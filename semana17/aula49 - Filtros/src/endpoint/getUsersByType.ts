import { Request, Response } from 'express';
import connection from '../connection';

const getUsersByType = async (req: Request, res: Response) => {

    try {

        const type = req.params.type

        const users = await connection('aula48_exercicio')
        .where({type})
        
        res.status(200).send(users)

    } catch (error) {
        res.send(error.message || error.sqlMessage)
        
    }
};

export default getUsersByType;