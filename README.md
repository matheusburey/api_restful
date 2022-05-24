# API RESTFUL EXPRESS

Api para cadastros de usuarios

### 🔧 Instalação

```
  git clone https://github.com/matheusburey/api_restful_express.git
  cd api_restful_express
  npm install
  cp .env.example .env
  docker-compose up -d
  docker exec -it node_express npx knex migrate:latest
```

### EndPoint
foi usado swagger para documentação dos endpoints

`http://localhost:3000/api-docs/api-documentation`

### 🛠️ Construído com

* [TypeScript](https://www.typescriptlang.org/) - linguagem de programação;
* [NodeJS](https://nodejs.org) - JavaScript runtime built;
* [Express](https://expressjs.com) - O framework web;
* [Knexjs](http://knexjs.org/) - O query builder;
* [Yup](https://www.npmjs.com/package/yup) - Construtor de esquema para análise e validação;
* [Docker](https://www.docker.com/) - gerenciador de contêineres;
