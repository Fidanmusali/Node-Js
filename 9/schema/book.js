import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    name: String,
    author: String,
    publishDate: Date,
    genre: String,
    price: Number,
    currency: String,
})

const bookModel = model('book', bookSchema)
export default bookModel