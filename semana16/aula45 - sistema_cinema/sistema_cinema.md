## Exercício 1

a) 
- Varchar - É usado para declarar characteres
- Primary-Key - É uma chave primária, única
- Not null - É obrigatório receber um valor
- Date - É usado para datas

b) 
- SHOW TABLES - mostra as tabelas no banco de dados
- SHOW DATABASES - mostra os bancos de dados

c) Descreve o tipo de informação que é aguardado em cada informação da tabela


## Exercício 2

a)
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) Duplicado entrada '002' para a chave 'PRIMÁRIO' 0,261 s - Chave primária não pode ser duplicada

c) A contagem de colunas não contagem do valor de correspondência na linha - está sendo declarada 3 colunas e recebendo 5 informações

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) O campo 'nome' não tem um valor padrão - O Valor nome deve ser declarado, pois não pode ser nulo

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Fulano de Tal",
  400000,
  "1949-04-18", 
  "male"
);
```

e) Valor de data incorreto : '1950' para a coluna 'birth_date' na linha 1 - birth_date espera receber uma string

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f)
``` sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Outro Ator",
  719333.33,
  "1979-03-26", 
  "female"
),
(
  "007", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

## Exercício 3

a) 
```sql
SELECT * FROM Actor WHERE gender = 'female';
```

b) 
```sql
SELECT salary FROM Actor WHERE name = 'Tony Ramos';
```

c) 
```sql
SELECT * FROM Actor WHERE gender = 'invalid'; 
```
- não retornou nada, pois não existe alguém com a gender "invalid"


d) 
```sql
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```

e) Coluna nome não existe.
```sql
SELECT id, name from Actor WHERE id = "002";
```


## Exercício 4
a) Seleciona na tabela Actor onde o nome iniciar com A ou nome iniciar com J e o salario for maior que 300.000.

b) 
```sql
SELECT * from Actor WHERE name NOT LIKE "a%" AND salary > 300000;
```

c) 
```sql
SELECT * from Actor WHERE name LIKE "%g%";
```

d) 
```sql
SELECT * from Actor WHERE (name LIKE "%a%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;
```

## Exercício 5

a)
```sql
CREATE TABLE Films (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
```
Cria uma tabela Chamada Films, que contém as colunas, id, name, synopsis, release_date e rating.

b)
```sql
INSERT INTO Films (id, name, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06", 
  7
);
```
c)
```sql
INSERT INTO Films (id, name, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27", 
  10
);
```
d)
```sql
INSERT INTO Films (id, name, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02", 
  8
);
```
e)
```sql
INSERT INTO Films (id, name, synopsis, release_date, rating)
VALUES(
  "004", 
  "O Homem Que Desafiou o Diabo",
  "Zé Araújo é um viajante recém-chegado em Jardim dos Caiacós. Ele seduz a filha de um comerciante e é obrigado a se casar com ela. Araújo torna-se um escravo do sogro e da mulher. Percebendo que vira motivo de piada na cidade, ele resolve mudar de vida e começar uma nova.",
  "2007/09/28", 
  7
);
```

## Exercício 6

a)
```sql
SELECT id, name, rating FROM Films WHERE id = '002';
```
b)
```sql
SELECT * FROM Films WHERE name = 'O Homem Que Desafiou o Diabo';
```
c)
```sql
SELECT id, name, synopsis FROM Films WHERE rating >= 7;
```

## Exercício 7

a)
```sql
SELECT * FROM Films WHERE name LIKE '%vida%';
```
b)
```sql
SELECT * FROM Films WHERE name LIKE '%araujo%' OR synopsis LIKE '%araujo%';
```
c)
```sql
SELECT * FROM Films WHERE release_date < '2020-07-19';
```
d)
```sql
SELECT * FROM Films WHERE release_date < '2020-07-19' AND (name LIKE '%araujo%' OR synopsis LIKE '%araujo%') AND rating > 7;
```