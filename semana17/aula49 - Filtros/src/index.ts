import express from 'express' 
import cors from 'cors' 
import getAllUsers from './endpoint/getAllUsers'
import getUsersByType from './endpoint/getUsersByType'
import getUserByOrder from './endpoint/getUserByOrder'

 

const app = express() 

app.use(express.json()) 
app.use(cors()) 

app.get('/users', getUserByOrder)
app.get('/users/:type', getUsersByType)

app.listen(3003, () => { 
console.log("Server is running in http://localhost:3003"); 
});