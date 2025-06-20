const express = require('express');
const userController = require('../controller/user');
const router = express.Router();

router
    .get('/users',userController.getAllUsers)
    .get('/users/:id',userController.getUser)
    .post('/users',userController.createUser)
    .put('/users/:id',userController.replaceUser)
    .patch('/users/:id',userController.updateUser)
    .delete('/users/:id',userController.deleteUser)

exports.router = router;
