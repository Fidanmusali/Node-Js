import express from 'express';
import dotenv from 'dotenv';
import { readFile, readFileSync, writeFile, writeFileSync } from 'fs';
import bodyParser from 'body-parser';
import { v4 } from 'uuid';

dotenv.config();
const app = express();
const port = process.env.NODE_PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.get('/', (req, res) => {
    const data = readFileSync('./db.json').toString();
    res.send(JSON.parse(data))
});
app.get('/:id', (req, res) => {
    const data = readFileSync('./db.json').toString();
    const id = +req.params.id;
    const currentMovie = JSON.parse(data).find((movie) => movie.id === id)
    if (currentMovie) {
        res.status(200).send(currentMovie);
    } else {
        res.status(404).send({ message: ' not found' });
    }
});


app.post('/', (req, res) => {
    readFile('./db.json', 'utf8', (err, data) => {
        const movies = JSON.parse(data);  
        const isExist = movies.find((movie) => movie.name === req.body.name);
        if (isExist) {
            return res.status(400).send({
                message: 'istifadeci var'
            });
        }
        movies.unshift(req.body);
        writeFile('./db.json', JSON.stringify(movies, null, 2), (err) => {
            if (err) {
                return res.status(500).send({
                    message: 'Error '
                });
            }
            return res.status(201).send({
                message: "elave edildi"
            });
        });
    });
});


app.delete("/:id", (req, res) => {
    const data = readFileSync('./db.json', 'utf8');
    const id = +req.params.id;
    
    const movies = JSON.parse(data);
    const filteredMovies = movies.filter((movie) => movie.id !== id);
    
    writeFileSync("./db.json", JSON.stringify(filteredMovies, null, 2));
    
    return res.status(200).send({
        message: "silindi"
    });
});


app.put("/:id", (req, res) => {
    const data = readFileSync('./db.json', 'utf8');
    const id = +req.params.id;
    const updatedMovie = req.body;
    
    const movies = JSON.parse(data);
    const movieIndex = movies.findIndex(movie => movie.id === id);
    
    if (movieIndex === -1) {
        return res.status(404).json({
            message: "Film tapilmadi"
        });
    }
    
    movies[movieIndex] = { ...movies[movieIndex], ...updatedMovie };
    writeFileSync("./db.json", JSON.stringify(movies, null, 2));
    
    return res.status(200).json({
        message: "Film yenilendi"
    });
});


app.patch("/:id", (req, res) => {
    const data = readFileSync('./db.json', 'utf8');
    const id = +req.params.id;
    const updates = req.body;
    
    const movies = JSON.parse(data);
    const movieIndex = movies.findIndex(movie => movie.id === id);
    
    if (movieIndex === -1) {
        return res.status(404).json({
            message: "Film tapilmadi"
        });
    }
    
    movies[movieIndex] = { ...movies[movieIndex], ...updates };
    writeFileSync("./db.json", JSON.stringify(movies, null, 2));
    
    return res.status(200).json({
        message: "Film yenilendi"
    });
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
