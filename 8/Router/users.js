import { Router } from "express";
import { client } from "../Utils/clientdb.js";

export const MovieRouter = new Router()

MovieRouter.get('/',(req,res)=>{
    client.db('sample_mflix')
    .collection('comments')
    .find()
    .toArray()
    .then((data)=>{
        res.send(data)
    })
})