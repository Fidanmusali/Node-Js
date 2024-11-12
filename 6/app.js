import express from 'express';
import { carRouter } from './Router/carRouter.js';
import { userRouter } from './Router/userRouter.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome Data');
});

app.use('/cars', carRouter);
app.use('/users', userRouter);

app.listen(4000, () => {
    console.log('http://localhost:4000');
});
