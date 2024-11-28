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
app.delete('/books/:id', (req, res) => {
    const id = req.params.id
    bookModel.findByIdAndDelete(id)
        .then((bookres) => {
            res.status(200).send({
                isSucced: true,
                message: "Books has been deleted successfully!",
            }).catch((err) => {
                res.status(404).send({
                    isSucced: false,
                    message: "not found!",
                });
            });
        })
})

app.post("/createdBook", (req, res) => {
    // const data = {
    //     name: "White Nights",
    //     author: "F. Dosteyevski",
    //     publishDate: '2024-04-11',
    //     genre: "romantic",
    //     price: 10,
    //     currency: 'azn',
    // }
    const data = req.body;
    bookModel.create(data);


    res.send('data yaradildi')
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`);

    mongoose.connect(CONNECTION_STRING).then(() => {
        console.log(`connected mongodb`);

    })
})