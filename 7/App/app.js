import express from 'express'
import dotenv from 'dotenv'
import { getProfession } from './Services/getProfession.js'
import { ProfessionRouter } from './Router/ProfessionRouter.js'
import { getBestProfession } from './Services/getBestProfession.js'

const app = express()
dotenv.config()

const port = process.env.NODE_PORT || 3000

app.get("/", (req, res) => {
    res.send({
        message: "welcome home page"
    })
})

app.use("/profession", ProfessionRouter)

app.get('/best-profession', getBestProfession)


app.listen(port, () => {
    console.log(`http://localhost:${port}`);

})