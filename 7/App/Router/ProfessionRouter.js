import { Router } from "express";
import { getProfession } from "../Services/getProfession.js";
import { getProfessionById } from "../Services/getProfessionById.js";
import { setProfessionRating, setProfessionRatingWithQuery } from "../Middleware/profession.js";


export const ProfessionRouter = new Router()

ProfessionRouter.get('/', setProfessionRatingWithQuery,getProfession)

ProfessionRouter.get("/:id", setProfessionRating, getProfessionById)