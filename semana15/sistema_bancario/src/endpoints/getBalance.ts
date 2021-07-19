import { Request, Response } from "express";
import { accounts } from "../accounts";
import { Account } from "../types";

export const getbalance = (
    req: Request,
    res: Response
): void => {
    let errorCode = 400
    try {

        const {name, cpf} = req.body

        const account: Account | undefined = accounts.find(account => account.cpf === cpf)
        if(!account){
            errorCode=404
            throw new Error(" usuário não encontrado ")
        }     

        if (account.name !== name){
            errorCode=404
            throw new Error(" o nome não consta no sistema")
        }


        res.status(200).send(`seu saldo é ${account.balance}`)

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}