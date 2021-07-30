## EXERCÍCIO 1

a) Retorna um array contendo 2 arrays

b)
```javascript
const searchName = async (req, res) => {
    try {

        const result = await connection.raw(`
            SELECT * 
            FROM Actor
            WHERE name = '${req.query.name}'
        `)

        res.status(200).send(result[0])
    } catch (error){
        res.status(400).send(error.sqlMessage || error.message);
    }
}
```

c)
```javascript
const searchGender = async(req, res)=> {
    try{

        const result = await connection.raw(`
            ELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `)

        res.status(200).send(result[0])
    }catch (error){
        res.status(400).send(error.sqlMessage || error.message);

    }
}
```
## EXERCÍCIO 2

a)
```javascript
const atualizaSalario = async(req, res) => {

    const {id, salary} = req.body

    await connection('Actor')
    .update({
        salary
    })
    .where({
        "id", id
    })
}
```

b)
```javascript
const deletaAtor = async(req, res) => {

    const {id} = req.body

    await connection('Actor')
    .delete()
    .where({
        "id", id
    })
}
```

c)
```javascript
const avgSalario = async(req, res) => {

    const {gender} = req.query

    const result = await connection('Actor')
    .avg('Mádia Salarial')
    .where({
        {gender}
    })

    return result.avarage
}
```
## EXERCÍCIO 3

a) feito

b)
```javascript
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
## EXERCÍCIO 4

a)
```javascript
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

b)
```javascript
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```