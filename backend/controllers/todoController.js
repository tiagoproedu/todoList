const TodoService = require('../services/todoService');

class TodoController{
    create = (req, res) => { //Método do controller para criar tarefas
        const todoData = req.body;

        const todo = TodoService.create(todoData);

        return res.status(200).json(todo);
    }

    listAll = (req, res) => { //Método para listar todas as tarefas criadas
        const todo = TodoService.listAll();

        return res.status(200).json(todo);
    }

    delete = (req, res) => {
        const todoData = req.body;

        const todo = TodoService.delete(todoData);

        return res.status(204).json(todo);
    }
}

module.exports = new TodoController(); //Aqui já optei por exportar criando um novo controller ao inves de fazer isso no routes