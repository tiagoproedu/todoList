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

    delete = (req, res) => { //Método para excluir uma tarefa
        const todoData = req.body;

        const todo = TodoService.delete(todoData);

        return res.status(204).json(todo);
    }

    update = (req, res) => {
        const { oldTask, newTask } = req.body;

        const updatedTodoList = TodoService.update(oldTask, newTask);

        return res.status(200).json(updatedTodoList);
    }
}

module.exports = new TodoController(); //Aqui já optei por exportar criando um novo controller ao inves de fazer isso no routes