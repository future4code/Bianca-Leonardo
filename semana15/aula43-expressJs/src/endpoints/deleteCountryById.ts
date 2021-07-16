import {Request, Response} from 'express';
import { countries } from '../data';

export const deleteCountryById = (
    req: Request,
    res: Response
): void => {

    // Caso o authorization for diferente, retorna o status e encerra
    if (req.headers.authorization !== 'Bia1234') {
        return res.status(401).end()
    }

    // procura o index em coutries
    const index: number = countries.findIndex(
        country => country.id === Number(req.params.id)
    )
    
    // exclui o index encontrato
    countries.splice(index, 1)

    res.status(204).end()
};
