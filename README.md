# Modulo 3 Exercicio Semana 2

Projeto de um questionario simplificado.

## Tecnologias Utilizadas
- **Node.js**

- **PostgreSQL**

## Bibliotecas Utilizadas

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [swagger](https://swagger.io/docs/open-source-tools/swagger-ui/development/setting-up/?sbsearch=node)

## Como Executar

Para executar este projeto, você deve ter instalado no seu computador o [NODEJS](https://nodejs.org/en).

1. **Clone o repositório:**

    ```bash
    git clone <URL do repositório>
    ```

2. **Instale as dependências:**

    Abra o terminal do **VSCode** ou do seu editor de código no diretório do repositório e instale as bibliotecas necessárias usando o comando:

    ```bash
        npm install
    ```

3. **Instale e configure o PostgreSQL:**

    - Descarregue e instale o gerenciador de banco de dados PostgreSQL (por exemplo, pode usar o **pgAdmin** https://www.pgadmin.org/download/) e inicie-o.
    - Crie uma base de dados para testar o projeto.

4. **Configure as variáveis de ambiente:**

    - Crie o arquivo `.env` na pasta raiz do projeto e forneça as suas variáveis. Pode usar como modelo o arquivo `.env_example.js` providenciado no projeto. Você deverá atualizar os seguintes campos:

    ```dotenv
        APP_PORT=3000
        DATABASE_HOST=localhost
        DATABASE_PORT=5432
        DATABASE_USERNAME=postgres
        DATABASE_PASSWORD=PASSWORD_USERNAME
        DATABASE_NAME=DATABASE_NAME
        DATABASE_DIALECT=postgres
    ```

5. **Inicie as migrações:**

    Rode no terminal o comando:

    ```bash
    npx sequelize db:migrate
    ```

    Este comando vai criar as tabelas necessárias na base de dados para poder iniciar o projeto.

6. **Popule as tabelas com dados iniciais:**

    Rode no terminal o comando:

    ```bash
    npx sequelize db:seed:all
    ```

7. **Carregue a documentação da API:**

    Rode no terminal o comando:

    ```bash
    npx run swagger
    ```

    Este comando foi configurado para rodar o comando `npm run node ./autoGen.swagger.js`.

8. **Inicie o servidor:**

    Rode no terminal o comando:

    ```bash
    npm run start
    ```

    Este comando foi configurado para rodar o comando `npm run nodemon src/index.js`.

## Documentação e Uso da API

Uma vez iniciado o servidor, carregue a URL `http://localhost:3000/docs/` no seu navegador. Nesta URL você encontrará a documentação da API e poderá testar algumas rotas do projeto. As funcionalidades disponíveis incluem:

- **Cadastrar um usuário** (POST).
- **Conectar (Logar) um usuário** com o Back-End (POST).

... Ainda esta emprojeto melhorar a documentaçao da api.
