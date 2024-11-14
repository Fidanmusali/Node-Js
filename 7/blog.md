#  change ranking

### /
* app.get("/", (req, res) => {
    res.send({
        message: "welcome home page"
    })
})
### /profession
* export const getProfession = (req, res) => {
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

### /profession/:id
* export const getProfessionById = (req, res) => {
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
### /profession?name=software
* export const getProfession = (req, res) => {
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
