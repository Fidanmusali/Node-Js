import { readFileSync } from 'fs';


export const getProfessionById = (req, res) => {
    let professions = readFileSync('./App/db.json')
    professions = JSON.parse(professions)
    const id = +req.params.id;
    const prof = professions.find((p) => p.id === id);
    if (prof) {
        res.status(200).send(prof)
    } else {
        res.status(404).send({
            message: "profession is not found"
        })
    }
}
