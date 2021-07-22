import express from 'express' 
import cors from 'cors' 
import postUser from './endpoints/postUser'

 

const app = express() 

app.use(express.json()) 
app.use(cors()) 

app.post('/user', postUser)

app.listen(3003, () => { 
console.log("Server is running in http://localhost:3003"); 
});