import { Router } from "express";
import users from "../db/user.js";

export const userRouter = new Router()

userRouter.get('/', (req, res) => {
    res.send(users);
});

userRouter.get('/:id', (req, res) => {
    const id = +req.params.id;
    const user = users.find((user) => user.id === id);
    res.send(user);

});