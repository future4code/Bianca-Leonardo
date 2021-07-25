import express from 'express' 
import cors from 'cors' 
import postUser from './endpoints/postUser'
import getUserById from './endpoints/getUserById'
import putUserById from './endpoints/putUserById'
import postTask from './endpoints/postTask'
import getTaskById from './endpoints/getTaskById'
import getAllUsers from './endpoints/getAllUsers'
import getTaskByUser from './endpoints/getTaskByUser'
import getUserByQuery from './endpoints/getUserByQuery'
import postTaskResponsible from './endpoints/postTaskResponsible'
import getUserByTask from './endpoints/getUserByTask'
import putStatusById from './endpoints/putStatusById'

 

const app = express() 

app.use(express.json()) 
app.use(cors()) 

app.get('/user', getUserByQuery)
app.get('/user/all', getAllUsers)
app.get('/user/:id', getUserById)
app.get('/task', getTaskByUser)
app.get('/task/:id', getTaskById)
app.get('/task/:id/responsible', getUserByTask)
app.post('/user', postUser)
app.post('/task', postTask)
app.post('/task/responsible', postTaskResponsible)
app.put('/user/edit/:id', putUserById)
app.put('/task/status/:id', putStatusById)

app.listen(3003, () => { 
console.log("Server is running in http://localhost:3003"); 
});