const express = require('express');
const userController = require('../controllers/userController');
const userRoutes = express.Router();

userRoutes.post("/", userController.create);
userRoutes.get("/", userController.listAll);
userRoutes.delete("/", userController.delete);
userRoutes.put("/", userController.update);

module.exports = userRoutes;