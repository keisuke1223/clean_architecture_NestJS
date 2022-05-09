<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## build docker containers

```bash
# development
$ docker compose up -d

# log
$ docker-compose logs -f

# DB connection
$ docker-compose exec db psql -U root nestjs
```

## GraphQL
```bash
# endpoint
http://localhost:3000/graphql

# select
query{
  books{
    id,
    createdAt,
    title,
    price
  }
}

# insert
mutation {
  addBook(newBook:{title:"test" price:2011 author:"Alice"}){
    title
    id
    createdAt
    price
  }
}


```

## Migration

```bash
$ docker exec -it api/ sh

# generate
$ npm run typeorm -- migration:generate -n "filename"

# run
$ npm run typeorm migration:run

# rollback
$ npm run typeorm migration:revert

```


## Test

```bash
$ docker exec -it api/ sh

# unit tests 
$ npm run test 
$ npm run test "filename" 
$ npm run test -- -t 'pec_name' 

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
