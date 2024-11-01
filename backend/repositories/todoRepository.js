const todoList = []; //Onde são armazenadas as tarefas depois de criadas

class TodoRepository{

    create(todo){ //Método que cria as tarefas
        todoList.push(todo);
        
        return todo;
    }

    listAll(){ //Método para listar todas as tarefas
        return todoList;
    }

    delete(todo){ //Método para excluir uma tarefa do array
        const index = todoList.indexOf(todo);

        if(index > -1) {
            todoList.splice(index, 1); //Remove o item do array todoList
        }

        return todoList;
    }
}

module.exports = new TodoRepository(); //Exportando já criando um novo repositorie