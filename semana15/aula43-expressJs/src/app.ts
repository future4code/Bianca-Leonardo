// npm install express cors
// npm install -D @types/express @types/cors

import cors from "cors";
import express, {Express} from "express";

export const app: Express = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Seja bem vindo! :)')
})

app.listen(3003, () => {
    console.log('server ready')
})