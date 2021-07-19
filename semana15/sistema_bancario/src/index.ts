import express, {Express} from 'express' 
import cors from 'cors' 
import { getAllAccounts } from './endpoints/getAllAccounts'
import { createUser } from './endpoints/createUser'
import { getbalance } from './endpoints/getBalance'
import { addBalance } from './endpoints/addBalance'
import { addPayment } from './endpoints/addPayment'
import { addTransfer } from './endpoints/addTransfer'

const app: Express = express() 

app.use(express.json()) 
app.use(cors()) 

app.get('/user', getbalance)
app.put('/user', addBalance)
app.post('/user/payment', addPayment)
app.post('/user/transfer', addTransfer)
app.get('/users/all', getAllAccounts)
app.post('/users/create', createUser)

app.listen(3003, () => { 
console.log("Server is running in http://localhost:3003"); 
}); 