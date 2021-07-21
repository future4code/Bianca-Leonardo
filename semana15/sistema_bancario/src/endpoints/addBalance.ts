import { Request, Response } from "express";
import { accounts } from "../accounts";

export const addBalance = (
    req: Request,
    res: Response
): void => {
    let errorCode = 400
    try {

        const { name, cpf, balance } = req.body

        const account = accounts.find(account => account.cpf === cpf)

        if (!account) {
            errorCode = 404
            throw new Error("CPF não encontrado");
            
        }

        if (account.name !== name) {
            errorCode = 404
            throw new Error("Nome informado não corresponde ao CPF");
            
        }

        account.balance += balance


        res.status(200).send(`Valor de ${balance} adicionado a conta!`)

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}