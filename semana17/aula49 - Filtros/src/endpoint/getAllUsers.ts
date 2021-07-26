import { Request, Response } from "express";
import connection from "../connection";

const getAllUsers = async (req: Request, res: Response) => {
    try {

        const name = req.query.name || '%'
        const sort = req.query.sort === 'name' ? 'name' : 'email'
        const order = req.query.order === 'DESC' ? 'DESC' : 'ASC'
        const page = Number(req.query.page)



        const offset:number = 5 * (page - 1)


        const users = await connection('aula48_exercicio')
        .where('name', 'LIKE', `%${name}%`)
        .orderBy(sort, order)
        .limit(5)
        .offset(offset)


        res.status(200).send(users)
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
};

export default getAllUsers;