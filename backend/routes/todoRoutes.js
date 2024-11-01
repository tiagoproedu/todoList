const express = require('express');
const todoRoutes = express.Router();
const TodoController = require('../controllers/todoController');

todoRoutes.post("/", TodoController.create); //Rota para a criação de uma tarefa
todoRoutes.get("/", TodoController.listAll); //Rota para listar todas as tarefas criadas
todoRoutes.delete("/", TodoController.delete); //Rota para excluir uma tarefa

module.exports = todoRoutes;