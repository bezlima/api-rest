# api-rest

Api rest criado com TypeScript, Node.JS, Express, MongoDB e Mongoose.

## Instalação

Clone o projeto

```bash
git clone https://github.com/bezlima/api-rest.git
```

Entre na pasta do projeto

```bash
cd api-rest
```

Instale as dependências

```bash
npm install
```

Crie o banco de dados mongodb com docker

```bash
docker run -d -p 27017:27017 --name usersDataBase mongo
```

Rode o projeto

```bash
npm run dev
```

## melhorias

-   [x] Divisão de rota de criação de usuários.
-   [x] Adicionar rota de login.
-   [x] Padronizar importação e exportação.
-   [ ] Adicionar autenticação JWT.
-   [ ] Adicionar documentação de uso de rota.
