const todoList = [];

class TodoRepository{

    create(todo){
        todoList.push(todo);
        
        return todo;
    }

    listAll(){
        return todoList;
    }
}

module.exports = new TodoRepository();