## Exercício 1

a)
Uma chave estrangeira é o identificador de uma outra tabela, que é a orimary key

b)
```sql
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    rate FLOAT,
    comment VARCHAR(255),
    film_id VARCHAR(255),
    FOREIGN KEY (film_id) REFERENCES Films(id)
);

INSERT INTO Rating
VALUES
('1', 7.5, 'Bom', '001'),
('2', 10, 'Ótimo', '002'),
('3', 5, 'Não gostei muito', '003'),
('4', 8, 'Muito Bom', '004');
```

c)
- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`paiva-2125458-bianca-leonardo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`film_id`) REFERENCES `Films` (`id`))
- Não pode ser atualizado pois não existe esse id em films

d)
```sql
ALTER TABLE Films
DROP COLUMN rating;
```

e)
- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`paiva-2125458-bianca-leonardo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`film_id`) REFERENCES `Films` (`id`))
- Não pode ser excluido pois ele é referencia em outra tabela

## Exercício 2

a)
- Cria uma tabela chamada MovieCast que recebe o id do filme e do ator

b)
```sql
INSERT INTO FilmsCast
VALUES
('001', '001'),
('003', '002'),
('002', '004'),
('004', '001');
```

c)
- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`paiva-2125458-bianca-leonardo`.`FilmsCast`, CONSTRAINT `FilmsCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
- Não pode atualizar pois não existe o id de Actor

d)
- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`paiva-2125458-bianca-leonardo`.`FilmsCast`, CONSTRAINT `FilmsCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
- Não pode apagar o ator pois ele esta sendo referenciado em outra tabela


## Exercício 3

a)
Seleciona todos os dados da tabela filme junto com a tabela Rating onde Movie.id seja igual ao movie_id na tabela Rating

b)
```sql
SELECT Films.id, name, rate 
FROM Films 
INNER JOIN Rating 
ON Films.id = Rating.film_id;
```