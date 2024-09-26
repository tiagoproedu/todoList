const TodoService = require('../services/todoService');

class TodoController{
    create = (req, res) => {
        const todoData = req.body;

        const todo = TodoService.create(todoData);

        return res.status(200).json(todo);
    }

    listAll = (req, res) => {
        const todo = TodoService.listAll();

        return res.status(200).json(todo);
    }
}

module.exports = new TodoController();