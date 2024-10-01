const todoList = []; //Onde são armazenadas as tarefas depois de criadas

class TodoRepository{

    create(todo){ //Método que cria as tarefas
        todoList.push(todo);
        
        return todo;
    }

    listAll(){ //Método para listar todas as tarefas
        return todoList;
    }
}

module.exports = new TodoRepository(); //Exportando já criando um novo repositorie