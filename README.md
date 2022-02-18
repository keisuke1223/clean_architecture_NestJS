<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.



## 検証環境構築

```bash
# development
$ docker compose up -d
  # 初回環境構築のみマイグレ実行
  $ docker-compose exec api npx typeorm migration:run

# ログ出力
$  docker-compose logs -f

# DB接続
$ docker-compose exec db psql -U root nestjs
```

## GraphQL
```bash
# endpoint
http://localhost:3000/graphql

# 取得
query{
  books{
    id,
    createdAt,
    title,
    price
  }
}

# 追加
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
# migrationファイルを生成
$ docker-compose exec api npx typeorm migration:generate -n "ファイル名"

# migration実行
$ docker-compose exec api npx typeorm migration:run

# ロールバック
$ docker-compose exec api npx typeorm migration:revert
```


## Test（整備中）

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
