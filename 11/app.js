import express from "express"
import jwt from "jsonwebtoken"

const app = express()
export const JWT_SECRET = "&*^%fg78fgvyiu^*FG#I@GE#6f&*@Fut2"; // env
const data = { id: "785678578", name: "alion", role: "admin" } // id, name, role
// ObjectId("785678578"), alion, admin 

app.get("/login", (req, res) => {
    const token = jwt.sign(data, JWT_SECRET);
    res.send(token);
})

// event driven programming
app.get("/", (req, res) => {
    res.send("huhu!🎅")
})
app.get("/admin", adminMiddleware, (req, res) => {
    res.send("admin huhu!🎅")
})
app.get('/login', (req, res) => {
    const token = req.headers.authorization?.split('')[1]
    res.send(token)
})

app.listen(8767, () => {
    console.log("app is up...")
})