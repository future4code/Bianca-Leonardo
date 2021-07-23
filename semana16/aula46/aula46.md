## Exercício 1

a)
Remove a coluna salary da tabela Actor

b) Altera o nome da coluna gender para sex na tabela actor

c) Altera a coluna gender para gender com no maximo 255 caracterer na tabela actor

d)
```sql
    ALTER TABLE Actor CHANGE gender gender VARCHAR(100)
```
## Exercício 2

a)
```sql
UPDATE Actor
SET name = "Moacyr Franco", date_birth = 2020-01-01
WHERE id = "003"
```

b)
```sql
UPDATE Actor
SET name = "JULIANA PAES",
WHERE name = "Juliana Paes";
```

```sql
UPDATE Actor
SET name = "Juliana Paes",
WHERE name = "JULIANA PAES";
```

c)
```sql
UPDATE Actor
SET name = "Juliana Paes", salary = 333000, birth_date = 2020-10-09, gender = 'non-binary'
WHERE id = "005";
```

d)
```sql
UPDATE Actor
SET name = "Nova Atriz"
WHERE id = "020";
```

- 0 linha (s) afetada (s) Linhas correspondentes: 0 Alterado: 0 Avisos: 0 
- Nunhuma Linha foi alterado, pois não tem essa linha

## Exercício 3

a)
```sql
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro"
```

b)
```sql
DELETE FROM Actor 
WHERE gender = "male" AND salary > 1000000
```
## Exercício 4

a)
```sql
SELECT MAX(salary) 
FROM Actor; 
```

b)
```sql
SELECT MIN(salary) 
FROM Actor
WHERE gender = "female";
```

c)
```sql
SELECT COUNT(*) 
FROM Actor 
WHERE gender = "female";
```

d)
```sql
SELECT SUM(salary) 
FROM Actor; 
```
## Exercício 5

a)
Retorna a quantidade de pessoas agrupado por gênero

b)
```sql
SELECT id, name
FROM Actor 
ORDER BY name DESC;
```

c)
```sql
SELECT *
FROM Actor 
ORDER BY salary ASC;
```

d)
```sql
SELECT *  
FROM Actor 
ORDER BY salary DESC
LIMIT 3;
```

e)
```sql
SELECT AVG(salary), gender
FROM Actor 
GROUP BY gender;
```

## Exercício 6

a)
```sql
ALTER TABLE Films
ADD playing_limit_date DATE;
```

b)
```sql
ALTER TABLE Films
CHANGE rating rating FLOAT NOT NULL;
```

c)
```sql
UPDATE Films
SET playing_limit_date = "2021-10-30"
WHERE id = "001";

UPDATE Films
SET playing_limit_date = "2020-10-30"
WHERE id = "002";
```

d)
```sql
DELETE FROM Films
WHERE id = 2;  

UPDATE Films
SET synopsis = "Zé Araújo é um viajante recém-chegado em Jardim dos Caiacós. Ele seduz a filha de um comerciante e é obrigado a se casar com ela. Araújo torna-se um escravo do sogro e da mulher. Percebendo que vira motivo de piada na cidade, ele resolve mudar de vida e começar uma nova."
WHERE id = "004";
```
- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
- A informação não foi alterada, pois não existe id 004

## Exercício 7

a)
```sql
SELECT COUNT(*) 
FROM Films 
WHERE rating > 7; 
```

b)
```sql
SELECT AVG(rating)
FROM Films;
```

c)
```sql
SELECT COUNT(*)
FROM Films;
```

d)
```sql
SELECT COUNT(*)
FROM Films
WHERE CURDATE() < playing_limit_date;
```

e)
```sql
SELECT MAX(rating)
FROM Films;
```

f)
```sql
SELECT MIN(rating)
FROM Films;
```
## Exercício 8

a)
```sql
SELECT *
FROM Films
ORDER BY name;
```

b)
```sql
SELECT *
FROM Films
ORDER BY name DESC
LIMIT 5;
```

c)
```sql
SELECT *
FROM Films
ORDER BY release_date DESC
LIMIT 3;
```

d)
```sql
SELECT *
FROM Films
ORDER BY rating DESC
LIMIT 3;
```