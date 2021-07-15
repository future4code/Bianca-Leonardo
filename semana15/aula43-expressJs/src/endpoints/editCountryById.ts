import { Request, Response } from 'express'
import { countries } from '../data'
import { country } from '../types'

export const editCountryById = (
    req: Request,
    res: Response
): void => {
    const countryIndex: number = countries.findIndex(
        (country) => country.id === Number(req.params.id)
      );

      if (req.body.name) {
        countries[countryIndex].name = req.body.name;
      }

      res
      .status(200)
      .send("Country successfully updated")
}