const TodoRepository = require('../repositories/todoRepository')

class TodoService{
    create = (todo) => { //Método do service para criar tarefas
        return TodoRepository.create(todo);
    }

    listAll = () => { //Método do service para listar todas as tarefas
        return TodoRepository.listAll();
    }

    delete = (todo) => { //Método do service para remover uma tarefa
        return TodoRepository.delete(todo);
    }

    update(oldTask, newTask) {
        return TodoRepository.update(oldTask, newTask);
    }
}

module.exports = new TodoService(); //Exportando o service já criando um novo