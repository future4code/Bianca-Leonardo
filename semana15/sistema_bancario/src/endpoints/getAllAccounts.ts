import { Request, Response } from "express";
import { accounts } from "../accounts";

export const getAllAccounts = (
    req: Request,
    res: Response
): void => {
    let errorCode = 400
    try {
        const listAccounts = accounts.map((account) => {
            return account
        })

        if(!listAccounts.length){
            errorCode = 404
            throw new Error("Nenhuma conta encontrada");
            
        }

        res.status(200).send(listAccounts)
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}