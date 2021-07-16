import { Request, Response } from 'express'
import { countries } from '../data'
import { country } from '../types'

export const addCountry = (
    req: Request,
    res: Response
): void => {
        const authorization: string = req.headers.authorization as string;
        
        if (!authorization || authorization.length < 10) {
          res.status(401)
        }

        const countryName: number = countries.findIndex(
          (country) => country.name === req.body.name
        );
    
        if (countryName !== -1) {
          res
          .status(401)
          .send('Já existe')
        }
    
        const newCountry: country = {
          id: Date.now(),
          name: req.body.name,
          capital: req.body.capital,
          continent: req.body.continent,
        };
    
        countries.push(newCountry);
    
        //deu tudo certo
        res
        .status(200)
        .send({ message: "Success!", conuntry: newCountry });
}