import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose'
import cors from 'cors'
import { BookRouter } from './routers/bookRouter.js'

const app = express()
dotenv.config()

app.use(cors());  
app.use(express.json())

const port = process.env.NODE_PORT || 3000
const CONNECTION_STRING = process.env.CONNECTION_STRING

app.get("/", (req, res) => {
    res.send({
        message: "welcome home page"
    })
})

app.use('/books', BookRouter);  

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    mongoose.connect(CONNECTION_STRING).then(() => {
        console.log(`connected to the mongodb`);
    });
})
