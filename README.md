# API RESTFUL GO-CHI

Api RESTFUL com GO-CHI e PostgreSQL implementando um CRUD para gerenciamento de usuários.

### 🔧 Instalação
clone o repositório e instale as dependências:
```sh
  git clone git@github.com:matheusburey/api_restful.git
  cd api_restful
  go mod download
```

se não tiver banco de dados, execute:
```sh
  docker-compose up -d
```

### 🚀 Execução
rodando as migrações:
```sh
  tern migrate --migrations ./migrations --config ./migrations/tern.conf
  go run cmd/api/main.go
```
para iniciar o servidor:
```sh
  go run cmd/api/main.go
```

### 🛠️ Construído com

* [Go](https://go.dev/) - Linguagem de programação principal;
* [Go-chi](https://go-chi.io/#/README) - Framework web leve e idiomático para Go;
* [pgx](https://github.com/jackc/pgx) - Driver PostgreSQL avançado para Go;
* [sqlc](https://sqlc.dev/) - Gerador de código que cria queries tipadas a partir de SQL puro;
* [tern](https://github.com/ternjs/tern) - Ferramenta de versionamento e gerenciamento de migrações de banco de dados;
* [Docker/Docker Compose](https://www.docker.com/) - gerenciador de contêineres;

### EndPoint

A API expõe os seguintes endpoints relacionados a usuários:  
URL_BASE = `http://localhost:3333`

### 🔹 Criar usuário
- **POST** `/api/v1/users`  
  Cria um novo usuário.  
  **Body (JSON):**
  ```json
  {
    "name": "user 3",
    "email": "usuario@email.com"
  }
  ```
  **Response success (status):**  
  `201 Created`

  **Response error:**  
  status: `422 Unprocessable Entity`
  ```json
  {
    "error": "email already registered"
  }
  ```

  **Response error:**  
  status: `400 Bad Request`
  ```json
  {
    "name": "min length is 5 and max length is 100"
  }
  ```


### 🔹 Listar usuários
- **GET** `/api/v1/users`  
  Lista todos os usuários.  
  **Response (JSON):**
  ```json
  [
    {
        "id": "80b30bd9-5645-4a24-95b4-063b0cee15f3",
        "name": "user 1",
        "email": "user1@gmail.com",
        "created_at": "2025-04-24T01:08:07.05422",
        "updated_at": "2025-04-24T01:08:07.05422"
    },
    {
        "id": "5f0293b0-bc35-42ef-9c0e-0ae08c73da0a",
        "name": "user 2",
        "email": "user2@teste.com",
        "created_at": "2025-04-25T00:27:10.509468",
        "updated_at": "2025-04-25T00:27:10.509468"
    }
  ]
  ```

### 🔹 Buscar usuário
- **GET** `/api/v1/users/{id}`  
  Busca um usuário pelo id.  
  **Response success (JSON):**
  ```json
  {
    "id": "80b30bd9-5645-4a24-95b4-063b0cee15f3",
    "name": "user 1",
    "email": "user1@gmail.com",
    "created_at": "2025-04-24T01:08:07.05422",
    "updated_at": "2025-04-24T01:08:07.05422"
  }
  ```
  
  **Response error:**  
  status: `404 Not Found`
  ```json
  {
    "error": "users not found"
  }
  ```

### 🔹 Atualizar usuário
- **PUT** `/api/v1/users/{id}`  
  Atualiza um usuário pelo id.  
  **Body (JSON):**
  ```json
  {
    "name": "user 3",
    "email": "usuario@email.com"
  }
  ```
  **Response (JSON):**
  ```json
  {
    "id": "80b30bd9-5645-4a24-95b4-063b0cee15f3",
    "name": "user 3",
    "email": "usuario@email.com",
    "created_at": "2025-04-24T01:08:07.05422",
    "updated_at": "2025-04-24T01:08:07.05422"
  }
  ```
  
  **Response error:**  
  status: `404 Not Found`
  ```json
  {
    "error": "users not found"
  }
  ```

### 🔹 Deletar usuário
- **DELETE** `/api/v1/users/{id}`
  Deleta um usuário pelo id.  
  **Response (status):**
  `204 No Content`
