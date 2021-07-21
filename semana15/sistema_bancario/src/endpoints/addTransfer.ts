import { Request, Response } from "express";
import { accounts } from "../accounts";

export const addTransfer = (
    req: Request,
    res: Response
): void => {
    let errorCode = 400
    try {

        const { name, cpf, nameRecipient, cpfRecipient, value } = req.body

        // trata a data
        const day: number = new Date().getDate()
        const month: number = new Date().getMonth()
        const year: number = new Date().getFullYear()
        const newDate: Date = new Date(`${year}-${month + 1}-${day}`)

        const account = accounts.find(account => account.cpf === cpf)

        if(!account){
            errorCode = 404
            throw new Error("CPF não encontrado");
        }

        if (account.name !== name) {
            errorCode = 404
            throw new Error("Nome do usuário não corresponde ao CPF");
            
        }

        const recipientAccount = accounts.find(account => account.cpf === cpfRecipient)
        if (!recipientAccount) {
            errorCode = 404
            throw new Error("CPF do destinatário não encontrado");
            
        }

        if (recipientAccount.name !== nameRecipient) {
            errorCode = 404
            throw new Error("Nome do destinatário incorreto");
            
        }

        if (account.balance < value) {
            errorCode = 404
            throw new Error("Saldo insuficiente");
            
        }

        if (account.balance >= value) {
            account.balance -= value
            account.statement.push({
                value,
                date: newDate,
                description: `Transferencia realizada para ${nameRecipient}`
            })
        }

        if (recipientAccount) {
            recipientAccount.balance += value
        }

        res.status(200).send("Tranferência enviada com sucesso!")

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}