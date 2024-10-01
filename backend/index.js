const express = require('express');
const todoRoutes = require('./routes/todoRoutes');
const app = express();
const cors = require('cors');

app.use(cors()); //Usado para que não haja problema nas requisições entre o cliente e o servidor

app.use(express.json()); //Usado para as rotas

app.listen("8080", () => { //Começa a ouvir a porta 8080 para executar a aplicação
    console.log('Estou rodando na porta 8080');
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use("/todo", todoRoutes); //Quando o front requisita usando o /todo quem vai assumir é o todoRoutes