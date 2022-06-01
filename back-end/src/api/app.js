const express = require('express');
const { loginRouter } = require('../routes/loginRoutes');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRouter);

module.exports = app;

// Branch Para Desenvolvimento, dar merge aqui antes da main.