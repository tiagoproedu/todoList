const userRepository = require("../repositories/userRepository")

class TodoService{
    create = (user) => { //Método do service para criar usuários
        return userRepository.create(user);
    }

    listAll = () => { //Método do service para listar todos os usuários
        return userRepository.listAll()
    }

    delete = (user) => { //Método do service para remover um usuário
        return userRepository.delete(user);
    }

    update(odlUser, newUser) { //Método do service para editar um usuário
        return userRepository.update(oldUser, newUser);
    }
}

module.exports = new TodoService();