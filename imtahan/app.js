import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import { readFile, readFileSync, writeFile,  writeFileSync } from 'fs'

dotenv.config()
const app = express();
const port = process.env.NODE_PORT || 4000

app.get('/animals', (req, res) => {
    const data = readFileSync('./db.json').toString();
    res.send(JSON.parse(data))
})


app.get('/animals/:id', (req, res) => {
    const data = readFileSync('./db.json', 'utf8');
    const id = +req.params.id;
    
    const findtheAnimals = JSON.parse(data).animals.find((animal) => animal.id === id);
    
    if (findtheAnimals) {
        res.status(200).send(findtheAnimals);
    } else {
        res.status(404).send({ message: 'Animal not found' });
    }
});

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json()) 

// app.post('/animals', (req, res) => {
//     readFile('./db.json', 'utf8', (err, data) => {
//         const jsonData = JSON.parse(data);  
//         const isExist = jsonData.animals.find((animal) => animal.name === req.body.name);
//         if (isExist) {
//             return res.status(400).send({
//                 message: 'bele heyvan var'
//             });
//         }
//         animals.push(req.body);
//         writeFile('./db.json', JSON.stringify(animals, null, 2), (err) => {
//             if (err) {
//                 return res.status(500).send({
//                     message: 'Error '
//                 });
//             }
//             return res.status(201).send({
//                 message: "elave edildi"
//             });
//         });
//     });
// });

app.delete("/animals/:id", (req, res) => {
    const data = readFileSync('./db.json', 'utf8');
    const database = JSON.parse(data);
    const id = +req.params.id;
    const filteredAnimals = database.animals.filter((animal) => animal.id !== id);
    database.animals = filteredAnimals;
    writeFileSync("./db.json", JSON.stringify(database, null, 2));
    return res.status(200).send({
        message: "silindi"
    });
});

app.put('/animals/:id', (req, res) => {
    readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({
                message: 'Error reading file'
            });
        }
        const jsonData = JSON.parse(data);
        const id = +req.params.id;

        const animalIndex = jsonData.animals.findIndex(animal => animal.id === id);

        if (animalIndex === -1) {
            return res.status(404).send({
                message: 'bele heyvan yoxdur'
            });
        }
        jsonData.animals[animalIndex] = {
            ...req.body,
            id: id 
        };

        writeFile('./db.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send({
                    message: 'Error'
                });
            }
            return res.status(200).send({
                message: "gonderildid",
                animal: jsonData.animals[animalIndex]
            });
        });
    });
});


app.patch('/animals/:id', (req, res) => {
    readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({
                message: 'Error'
            });
        }

        const jsonData = JSON.parse(data);
        const id = +req.params.id;

        const animalIndex = jsonData.animals.findIndex(animal => animal.id === id);

        if (animalIndex === -1) {
            return res.status(404).send({
                message: 'not found'
            });
        }

        jsonData.animals[animalIndex] = {
            ...jsonData.animals[animalIndex],
            ...req.body,
            id: id  
        };

        writeFile('./db.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send({
                    message: 'Error'
                });
            }
            return res.status(200).send({
                message: "Partial update completed",
                animal: jsonData.animals[animalIndex]
            });
        });
    });
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);

})