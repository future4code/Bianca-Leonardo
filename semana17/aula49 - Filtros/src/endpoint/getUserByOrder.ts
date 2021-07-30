import { Request, Response } from 'express';
import connection from '../connection';

const getUserByOrder = async (req: Request, res: Response) =>{

    try {

        const sort = req.query.sort === 'name' ? 'name' : 'email'
        const order = req.query.order === 'DESC' ? 'DESC' : 'ASC'

        const users = await connection
        .select('*')
        .from('aula48_exercicio')
        .orderBy(sort, order)

        console.log(sort, order)
        
        res.status(200).send(users)

    } catch (error) {
        res.send(error.message || error.sqlMessage)
        
    }
};

export default getUserByOrder;