const express = require('express');
const todoRoutes = require('./routes/todoRoutes');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.listen("8080", () => {
    console.log('Estou rodando na porta 8080');
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use("/todo", todoRoutes);