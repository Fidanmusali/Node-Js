import { readFileSync, writeFileSync } from 'fs';

export const setProfessionRating = (req, res, next) => {
    let professions = readFileSync('./App/db.json')
    professions = JSON.parse(professions)
    const id = +req.params.id;
    const prof = professions.map((p) => {
        if (p.id == id) {
            p.ranking += 1;
        }
        return p
    })
    writeFileSync('./App/db.json', JSON.stringify(prof, null, 2))
    next()
}

export const setProfessionRatingWithQuery = (req, res, next) => {
    const name = req.query.name;
    let professions = readFileSync('./App/db.json')
    professions = JSON.parse(professions)
    if (name) {
        const prof = professions.map((p) => {
            if (p.name.toLowerCase() === name.toLowerCase()) {
                p.ranking += 2;
            }
            return p
        });
        writeFileSync('./App/db.json', JSON.stringify(prof, null, 2))
    }
    next()
}