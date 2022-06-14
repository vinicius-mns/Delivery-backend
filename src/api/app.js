const express = require('express');
const cors = require('cors');
const { loginRouter } = require('../routes/loginRoute');
const { userRouter } = require('../routes/userRoute');
const { productsRouter } = require('../routes/productsRoute');
const { errorHandler } = require('../middleware/errorHandler');
const { salesRouter } = require('../routes/salesRoute');
const imageRoutes = require('../routes/imageRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/images', express.static('public/images'));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRouter);
app.use('/register', userRouter);
app.use('/products', productsRouter);
app.use('/images/upload', imageRoutes);
app.use('/sales', salesRouter);

app.use(errorHandler);

module.exports = app;

// Branch Para Desenvolvimento, dar merge aqui antes da main.
