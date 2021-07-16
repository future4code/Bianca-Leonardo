import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

enum UserType {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL'
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60
  }
]


const app = express()
app.use(express.json())
app.use(cors())

// 1-
// a) get
// b) /users

app.get('/users', (req: Request, res: Response) => {

  let errorCode = 400
  try {

    if (!users) {
      errorCode = 404
      throw new Error("Users not found");

    }

    res.status(200).send(users)
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
})


// 2-
// a) :type, acho que facilita a informação, para o usuario saber que tem que passar um parametro
// b) Fiz um if para verificar se é NORMAL ou ADMIN
app.get('/users/:type', (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const type: string = req.params.type as string

    if (type !== 'ADMIN' && type !== 'NORMAL') {
      errorCode = 404
      throw new Error("There is no type");
    }

    const listUsers: User[] = users.filter((user) => {
      return user.type === type
    })

    if (!listUsers) {
      errorCode = 404
      throw new Error("User not found");
    }

    res.status(200).send(listUsers)

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
})

// 3-
// a) query
// b) Fiz um if para verificar se é NORMAL ou ADMIN
app.get('/users', (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const name: string = req.query.name as string

    // caso o usuario digite uma letra, vai retornar Nan, caso seja Nan vai retornar um erro
    if (!name) {
      errorCode = 404 // unprocessable entity
      throw new Error("Enter a name");
    }

    const searchName = users.find((user) => {
      return user.name === name
    })

    // caso o usuario não seja encontrado
    if (!searchName) {
      errorCode = 404
      throw new Error("User not found");
    }

    res.status(200).send(searchName)

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
})

app.post('/users', (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    // Desentrutura e recebe as informações do body
    const { id, name, email, type, age } = req.body

    // caso não exista alguma das informações
    if (!id || !name || !email || !type || !age) {
      errorCode = 422
      throw new Error("Please check the fields!");

    }

    // cria o objeto novo usuario
    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }

    // adiciona o novo usuario aos usuarios
    users.push(newUser)
    // Criado com sucesso
    res.status(201).send({ message: 'Successes!' })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
})


// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
