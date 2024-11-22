const todoList = []; //Onde são armazenadas as tarefas depois de criadas
let idCounter = 1; //Contador que gera ID's únicos

class TodoRepository{

    create(todo){ //Método que cria as tarefas
        const newTodo = { id: idCounter++, ...todo };
        todoList.push(newTodo);
        
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

    update(oldTask, newTask) { //Método para atualizar uma tarefa no array
        const index = todoList.indexOf(oldTask);

        if(index > -1) {
            todoList[index] = newTask; //Atualiza a tarefa no array todoList
        }
        
        return todoList;
    }
}

module.exports = new TodoRepository(); //Exportando já criando um novo repository