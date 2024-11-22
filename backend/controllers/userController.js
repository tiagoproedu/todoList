const userService = require("../services/userService");

class UserController{
    create = (req, res) => {
        const userData = req.body;

        const user = userService.create(userData);

        return res.status(200).json(user);
    }

    listAll = (req, res) => {
        const user = userService.listAll();

        return res.status(200).json(user);
    }

    delete = (req, res) => {
        const userData = req.body;

        const user = userService.delete(userData);

        return res.status(204).json(user);
    }

    update = (req, res) => {
        const { oldUser, newUser } = req.body;

        const updateUserList = userService.update(oldUser, newUser);

        return res.status(200).json(updateUserList);
    }
}

module.exports = new UserController();