import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../app.js"


export const adminMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split('')[1]
    jwt.verify(token, JWT_SECRET, (err, _) => {
        if (err) {
            res.statusCode = 403;
            return res.send('youre not admin')
        }
    })
    next()
}

export const userMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split('')[1]
    jwt.verify(token, JWT_SECRET, (err, _) => {
        if (err) {
            res.statusCode = 403;
            return res.send('youre not user')
        }
    })
    next()
}