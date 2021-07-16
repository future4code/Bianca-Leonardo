import { Request, Response } from 'express'
import { countries } from '../data'
import { country } from '../types'

export const getCountryById = (
    req: Request,
    res: Response
): void => {

    // find retorna apenas o primeiro resultado
    const result: country | undefined = countries.find(
        country => country.id.toString() === req.params.id
    )
    res
    .status(200)
    .send(result)
}