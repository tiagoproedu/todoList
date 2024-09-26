const express = require('express');
const todoRoutes = express.Router();
const TodoController = require('../controllers/todoController');

todoRoutes.post("/", TodoController.create);
todoRoutes.get("/", TodoController.listAll);

module.exports = todoRoutes;