import {app} from './app'
import { addCountry } from './endpoints/addCountry'
import { deleteCountryById } from './endpoints/deleteCountryById'
import { editCountryById } from './endpoints/editCountryById'
import { getAllCountries } from './endpoints/getAllCountries'
import { getCountriesByFilter } from './endpoints/getCountriesByFilter'
import { getCountryById } from './endpoints/getCountryById'
import { getRandomCountry } from './endpoints/getRandomCountry'

app.get('/countries', getAllCountries)
app.get('/countries/random', getRandomCountry)
app.get('/countries/search', getCountriesByFilter)
app.get('/countries/:id', getCountryById)
app.post('/countries', addCountry)
app.post('/countries/:id', editCountryById)
app.delete('/countries/:id', deleteCountryById)
