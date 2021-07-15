import {Request, Response} from 'express'
import { countries } from '../data'
import { country } from '../types'

export const getRandomCountry = (
    req: Request,
    res: Response
): void => {

    const result: country | undefined = countries.find(
        country => country.id === Math.floor(Math.random() * 190)
    )

    res.send(result)
}