import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookModel from "./schema/book.js";


const app = express()
dotenv.config()
const port = process.env.NODE_PORT || 5000
const CONNECTION_STRING = process.env.CONNECTION_STRING

app.get("/", (req, res) => {
    res.send("welcome to the first page")
})

app.get('/books', (req, res) => {
    bookModel.find().then((data) => {
        res.send(data)
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id
    bookModel.findById(id).then((data) => {
        res.send(data)
    })
})
app.put('/books/:id', (req, res) => {
    const id = req.params.id;
    bookModel.findByIdAndUpdate(id, { name: 'notes' })
        .then(() => {
            res.status(200).send(" updated");
        })
        .catch((err) => {
            res.status(500).send(`${err.message}`);
        });
});

app.post("/createdBook", (req, res) => {
    const data = {
        name: "White Nights",
        author: "F. Dosteyevski",
        publishDate: '2024-04-11',
        genre: "romantic",
        price: 10,
        currency: 'azn',
    }
    const data2 = {
        name: "Crime and Punishment",
        author: "F. Dostoyevski",
        publishDate: "1866-01-01",
        genre: "Philosophical",
        price: 20,
        currency: "USD",
    }
    const data3 = {
        name: "The Brothers Karamazov",
        author: "F. Dostoyevski",
        publishDate: "1880-01-01",
        genre: "Drama",
        price: 15,
        currency: "EUR",
    }
    bookModel.create(data);
    bookModel.create(data2);
    bookModel.create(data3);

    res.send('data yaradildi')
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`);

    mongoose.connect(CONNECTION_STRING).then(() => {
        console.log(`connected mongodb`);

    })
})