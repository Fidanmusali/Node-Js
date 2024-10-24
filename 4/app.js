import express from 'express'
import dotenv from 'dotenv'
import { lists } from './db.js'

const app = express()
dotenv.config()

app.get('/', (req, res) => {
    res.send('Welcome to my first API');
});

app.get('/todos', (req, res) => {
    const id = req.query.id;
    if (id) {
      const todo = lists.find((todo) => todo.id == id);
      if (todo) {
        res.send(todo); 
      } else {
        res.status(404).send('not found');
      }
    } else {
      res.send(lists); 
    }
  });

app.get('/todos/:id', (req, res) => {
    const todo = lists.find((todo) => todo.id == req.params.id)
    res.send(todo)
    if (todo) {
        res.send(todo); 
      } else {
        res.status(404).send(' not found');
      }
});

const port = process.env.NODE_PORT

app.listen(port, () => {
    console.log(`server http://localhost:${port} portunda isleyir`);
})