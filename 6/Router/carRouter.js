import { Router } from "express";
import cars from "../db/car.js";

export const carRouter = new Router();

carRouter.get('/', (req, res) => {
    res.send(cars);
});

carRouter.get('/:id', (req, res) => {
    const id = +req.params.id;
    const car = cars.find((car) => car.id === id);
    res.send(car);

});
