import { Request, Response } from "express";
import { accounts } from "../accounts";

export const createUser = (
    req: Request,
    res: Response
): void => {
    let errorCode = 400
    try {
        const { name, cpf, birth } = req.body

        // Trata a data de aniversario
        // Onde tiver a / quebra e salva dentro de um array. Ex: 01/01/2020 = [01, 01, 2020]
        const [day, month, year] = birth.split("/")

        const newBirth: Date = new Date(`${year}-${month}-${day}`)

        // Valida a data de aniversário
        // Pega a data atual em milissegundos e diminui pela idade do usuario em milissegundos
        const ageInMilisseconds: number = Date.now() - newBirth.getTime()

        // pega o resultado de ageInMilisseconds e tranforma em anos
        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

        const account = accounts.find(account => account.cpf === cpf)
        if (account) {
            errorCode = 404
            throw new Error("CPF já cadastrado");
            
        }
        // Caso a idade seja menor que 18 volta um erro
        if (ageInYears < 18) {
            errorCode = 406
            throw new Error("Idade deve ser maior que 18 anos");
            
        }

        accounts.push({
            name,
            cpf,
            birth: newBirth,
            balance: 0,
            statement: []
        })

        res.status(201).send('Conta criada com sucesso')
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}