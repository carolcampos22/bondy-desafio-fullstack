# bondy-desafio-fullstack

Este repositório é um monorepo construído com Lerna e dividido em duas partes principais: backend e frontend. O objetivo deste projeto é criar uma aplicação com uma API GraphQL e um frontend que se conecta a essa API.

## Estrutura do repositório:

```
packages/
    backend/
        src/
            ...
        package.json
        serverless.yml
    frontend/
        package.json

package.json
```
## Configuração do Projeto
### Requisitos
- Node.js 18.x
- Yarn

## Configuração inicial
1. Clone o repositório:
```bash
git clone https://github.com/carolcampos22/bondy-desafio-fullstack.git
```
2. Entre no repositório:
```bash
cd bondy-desafio-fullstack
```
3. Istale as dependências:
```bash
yarn
```

### Backend
O backend utiliza GraphQL para expor uma API que permite realizar login.
### Dependências
- Node.js 18.x
- MongoDB (configurado para testes)
- graphql (para criar a API GraphQL)

### Configuração
1. Verifique a configuração do banco de dados em src/memoryDB/connection.ts. Certifique-se de que o banco de dados MongoDB está em execução.
2. Execute o servidor backend:
```bash
yarn lerna run start --scope=backend

```
3. Acesse o Playground GraphQL na URL exibida no console para testar as mutações e consultas.

### Frontend
O frontend é responsável pela interface do usuário e pela conexão com a API GraphQL.

### Dependências
- React.js
- Apollo Client (para integração com GraphQL)

### Configuração
1. Navegue até o diretório frontend e instale as dependências:
```bash
cd packages/frontend
yarn
```
2. Execute o projeto frontend:
```bash
yarn dev
```
3. Abra o navegador e acesse o frontend no URL exibido no console.


### Funcionalidades
1. Página de Login:
- Campos para e-mail e senha.
- Validação dos campos de entrada.
- Conexão com a API GraphQL para autenticação.
  
. Página de Boas-Vindas:

- Redireciona após um login bem-sucedido.
- Exibe uma mensagem de boas-vindas.

### Comandos Úteis
Executar o backend:

```bash
yarn lerna run start --scope=backend
```
Executar o frontend:

```bash
yarn lerna run start --scope=frontend
```
