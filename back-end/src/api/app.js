const express = require('express');
const cors = require('cors');
const { loginRouter } = require('../routes/loginRoutes');
const { userRouter } = require('../routes/userRoute');
const { errorHandler } = require('../middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRouter);
app.use('/register', userRouter);

app.use(errorHandler);

module.exports = app;

// Branch Para Desenvolvimento, dar merge aqui antes da main.
