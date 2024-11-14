import { readFileSync } from 'fs';


export const getProfession = (req, res) => {
    let professions = readFileSync('./App/db.json')
    professions = JSON.parse(professions)
    const name = req.query.name;

    if (name) {
        const profession = professions.find((p) => p.name.toLowerCase() === name.toLowerCase())
        if (profession) {
            res.status(200).send(profession);
        } else {
            res.status(404).send({ message: "profession not found!" });
        }
    }else{
        res.status(200).send(professions);
    }
};
