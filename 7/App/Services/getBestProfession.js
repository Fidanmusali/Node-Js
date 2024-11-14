import { readFileSync } from 'fs'
export const getBestProfession = (req, res) => {
    let professions = readFileSync('./App/db.json')
    professions = JSON.parse(professions)
    professions.sort((a, b) => (a.ranking > b.ranking ? -1 : 0))
    res.status(200).send(professions[0])
}