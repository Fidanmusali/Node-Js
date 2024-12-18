import { Router } from "express"
import { BookModel } from '../schema/book.js'


export const BookRouter = new Router()

BookRouter.post('/', async (req, res) => {
    try {
        if (!req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'send all req'
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await BookModel.create(newBook)
        return res.status(201).send(book)
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message })

    }
})

BookRouter.get('/', (req, res) => {
    BookModel.find().then((data) => {
        res.send(data)
    })
})

BookRouter.get('/:id', (req, res) => {
    const id = req.params.id
    BookModel.findById(id).then((data) => {
        res.send(data)
    })
})

BookRouter.put("/:id", async (req, res) => {
    try {
        if (!req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'send all req'
            })
        }
        const id = req.params.id
        const result = await BookModel.findByIdAndUpdate(id, req.body)
        if (!result) {
            return res.status(404).json({ message: 'book not found' })
        }
        return res.status(200).json({ message: 'book updated successfully' })

    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message })

    }
})

BookRouter.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const result = await BookModel.findByIdAndDelete(id)
        if (!result) {
            return res.status(404).json({ message: 'book not found' })
        }
        return res.status(200).json({ message: 'book deleted successfully' })

    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message })

    }
})