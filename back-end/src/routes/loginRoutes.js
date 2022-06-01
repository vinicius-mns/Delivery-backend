const express = require('express');
const UserController = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/', UserController.createLogin);

module.exports = { loginRouter };
