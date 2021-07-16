import { Request, Response } from "express"
import { countries } from "../data"

export const getAllCountries = (
    req: Request,
    res: Response
):void => {

    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))

    res
    .status(200)
    .send(result)
}