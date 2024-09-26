const TodoRepository = require('../repositories/todoRepository')

class TodoService{
    create = (todo) => {
        return TodoRepository.create(todo);
    }

    listAll = () => {
        return TodoRepository.listAll();
    }
}

module.exports = new TodoService();