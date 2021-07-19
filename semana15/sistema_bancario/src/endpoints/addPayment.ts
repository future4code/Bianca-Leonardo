import { Request, Response } from "express";
import { accounts } from "../accounts";
import { Account } from "../types";

export const addPayment = (
    req: Request,
    res: Response
): void => {
    let errorCode = 400
    try {

        const { name, cpf, value, date, description } = req.body

        // trata a data
        const [day, month, year] = date.split("/")
        const newDate: Date = new Date(`${year}-${month}-${day}`)

        const listAccount: Account[] = accounts.map((account) => {
            return account
        })

        const account = listAccount.find(account => account.cpf === cpf)

        if (!account) {
            errorCode = 404
            throw new Error("CPF não encontrado");

        }

        if (account.name !== name) {
            errorCode = 404
            throw new Error("Nome informado não corresponde ao CPF");

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
                description
            })
        }

        res.status(200).send('Pagamento realizado com sucesso!')

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}