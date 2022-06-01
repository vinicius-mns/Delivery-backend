const express = require('express');
const LoginController = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/', LoginController.createLogin);

module.exports = { loginRouter };
