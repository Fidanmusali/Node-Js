import { Router } from "express";

export const HomeRouter = new Router();

HomeRouter.get("/", (req, res) => {
    res.status(200).send({
        message: "welcome first app"
    })
})