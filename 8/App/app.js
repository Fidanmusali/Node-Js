import express from 'express'
import { HomeRouter } from '../Router/home.js';
import { MovieRouter } from '../Router/users.js';
import { client } from '../Utils/clientdb.js';

const app = express()

app.use('/',HomeRouter)
app.use('/comments',MovieRouter)

app.listen(5000, () => {
    console.log(`http://localhost:5000`);
    client.connect().then(() => {
        console.log('mongodb is connected');

    })
})