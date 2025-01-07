# Sistema de Gerenciamento de Tarefas

Este é um projeto simples para gerenciar tarefas, desenvolvido com Node.js e Express. O sistema permite listar, adicionar e excluir tarefas, com persistência de dados utilizando um arquivo JSON. O ambiente está configurado para ser executado com Docker e Docker Compose.

---

## 🗂 Estrutura do Projeto

- **Backend (Node.js e Express)**: Lida com as requisições e operações de tarefas.
- **Docker**: Contêiner para executar a aplicação e persistir os dados.
- **Arquivo JSON**: Utilizado como banco de dados local.

---

## 🚀 Como Executar

## 1. Clonar o repositório:

`
git clone https://github.com/deboravians/toDoList-docker.git
`

## 2. Subir os contêineres com Docker Compose:
Certifique-se de ter o Docker e o Docker Compose instalados no sistema.

`
docker-compose up --build
`

## 3. Acessar a aplicação:
A aplicação estará disponível em:
`
http://localhost:3000
`

## 4. 🛠 Persistência de Dados
Este projeto utiliza volumes para persistir dados. O arquivo tasks.json é armazenado na pasta data/, que é montada como volume do container Docker. Isso garante que os dados sejam mantidos mesmo que o container seja parado.

## 5. 📝 Instruções para Executar Localmente (Sem Docker)
Instale as dependências:

`
npm install
`

Inicie o servidor:

`npm start`

Acesse o sistema no navegador em:
`http://localhost:3000 `
