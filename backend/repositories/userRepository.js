const userList = []; //Onde serão armazenadas os usuários depois de criadas
let idCounter = 1; //Contador que gera ID's únicos

class UserRepository{

    create(user) { //Método que cria os usuários
        const newUser = {id: idCounter++, ...user};
        userList.push(newUser);

        return user;
    }

    listAll(){ //Método para listar todos os usuários
        return userList;
    }

    delete(user){ //Método para excluir uma tarefa do array
        const index = userList.indexOf(user);

        if(index > -1){
            userList.splice(index, 1); //Remove o item do array
        }

        return userList;
    }

    update(oldUser, newUser) { //Método para atualizar um usuário no array
        const index = userList.indexOf(oldUser);

        if(index > -1) {
            userList[index] = newUser; //Atualiza o usuário no array userList
        }
        
        return userList;
    }
}

module.exports = new UserRepository(); //Exportando já criando um novo repository